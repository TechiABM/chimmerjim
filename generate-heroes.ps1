<#
.SYNOPSIS
    ChimmerJim — Generate hero images for all landing page templates via Higgsfield AI.

.DESCRIPTION
    Launches 7 parallel Higgsfield jobs (one per page template), waits for all to finish,
    then downloads and saves the results into public/heroes/.

    PREREQUISITES
    1. npm install -g @higgsfield/cli   (or the local binary is enough)
    2. higgsfield auth login            (run once; credentials are cached)

.USAGE
    cd C:\Users\User\WebstormProjects\chimmerjim
    .\generate-heroes.ps1
#>

$ErrorActionPreference = "Stop"

# ── Paths ──────────────────────────────────────────────────────────────────────
$ProjectRoot = $PSScriptRoot
$LocalBin    = Join-Path $ProjectRoot "node_modules\@higgsfield\cli\vendor\hf.exe"

# Prefer local binary; fall back to PATH (global install)
if (Test-Path $LocalBin) {
    $HiggsBin = $LocalBin
} else {
    $HiggsBin = "higgsfield"
    Write-Host "Local hf.exe not found — falling back to 'higgsfield' on PATH." -ForegroundColor Yellow
}

$OutDir = Join-Path $ProjectRoot "public\heroes"
New-Item -ItemType Directory -Path $OutDir -Force | Out-Null
Write-Host "Output folder: $OutDir" -ForegroundColor Cyan

# ── Helper: extract first URL from Higgsfield stdout ──────────────────────────
$UrlExtractor = {
    param([string]$rawOutput)
    $match = [regex]::Match($rawOutput, 'https?://\S+')
    if ($match.Success) { return $match.Value.TrimEnd('.') }
    return $null
}

# ── Job definitions ────────────────────────────────────────────────────────────
# Each hashtable: Name (→ filename), Prompt
$Jobs = @(

    @{
        Name   = "hero-home"
        Prompt = "Photorealistic cinematic 16:9 hero image: a professional chimney sweep technician in a crisp navy blue branded uniform with an amber logo patch stands confidently in front of a classic traditional American red brick colonial home at golden hour. Warm late-afternoon sunlight bathes the scene in a soft amber glow. Through a large picture window behind the technician a cozy fireplace glows with gentle orange fire inside a tastefully decorated living room. The technician smiles warmly at the camera holding a professional inspection clipboard with high-quality chimney cleaning equipment neatly staged nearby. Sky is a deep gradient of navy blue to gold at the horizon. Overall mood: trustworthy warm and professional. Editorial photography style, natural light, no filters."
    }

    @{
        Name   = "hero-washington"
        Prompt = "Photorealistic cinematic wide shot of a professional chimney technician in branded navy uniform working atop a classic Washington DC red-brick rowhouse rooftop, tall historic brick chimneys rising against a warm golden-amber autumn sky, fallen orange and red leaves visible on the street below, the Washington Monument softly visible in the misty background distance, soft morning light casting long warm amber shadows across the rooftop slate tiles, row of historic Federal-style townhouses stretching down the block, cinematic 16:9 composition, shallow depth of field, golden hour lighting, professional editorial photography style."
    }

    @{
        Name   = "hero-washington-city"
        Prompt = "Photorealistic wide-angle 16:9 aerial view of a pristine Northern Virginia suburb street lined with blooming cherry blossom and mature maple trees in warm late-afternoon golden hour light. Foreground: an elegant two-story colonial brick home with a tall prominent red-brick chimney on the roofline. A professional chimney technician wearing a high-visibility vest and white hard hat kneels on the rooftop beside the chimney inspecting it with specialized tools. A branded navy-blue and amber service van is parked curbside below. The neighborhood exudes suburban affluence — manicured lawns, slate roofs, dormers. Soft lens flare from the setting sun, photorealistic DSLR quality, sharp foreground detail, bokeh background, cinematic color grade with deep navy shadows and warm amber highlights."
    }

    @{
        Name   = "hero-service"
        Prompt = "Close-up of an NFPA-certified chimney technician performing a professional chimney inspection, using a high-powered flashlight and camera scope inside a dark chimney flue, wearing full protective gear including a hard hat and dust mask, NFPA certification badge clearly visible on uniform, dramatic professional lighting illuminating soot-stained brick walls, technician's focused expression conveying expert craftsmanship, warm amber tones from the flashlight beam contrasting with deep navy shadows, photorealistic commercial photography style, sharp detail on equipment and gear, 16:9 composition."
    }

    @{
        Name   = "hero-metro"
        Prompt = "Wide aerial and eye-level cinematic view of a beautiful diverse American suburban neighborhood, classic two-story homes with prominent brick and stone chimneys rising above rooftops, warm golden late-afternoon sunlight casting long dramatic shadows across tree-lined residential streets, mature oak and maple trees lining the sidewalks, a professional chimney service van with navy blue and amber branding parked along the curb, welcoming community atmosphere, rich autumn foliage, soft lens flare from the low sun, photorealistic DSLR quality, cinematic 16:9 composition, shallow depth of field on foreground elements, sharp detail on chimney masonry and brickwork, blue sky with a few wispy clouds."
    }

    @{
        Name   = "hero-metro-service"
        Prompt = "Professional chimney repair technician on a rooftop carefully applying mortar to brick chimney crown during tuckpointing, safety harness clearly visible, crisp clear blue sky with soft light clouds, peaceful suburban neighborhood stretching below, precision masonry tools arranged neatly on rooftop beside technician, warm golden afternoon light casting rich shadows and highlighting expert brickwork texture, photorealistic cinematic composition, 16:9 wide angle, sharp focus, high detail."
    }

    @{
        Name   = "hero-ads"
        Prompt = "Photorealistic 16:9 wide shot of a warm cozy living room at golden evening hour, centered on a beautifully blazing brick fireplace with rich amber and orange flames dancing behind a clean glass door, a happy relieved couple sitting together on a plush sofa smiling softly at the fire wrapped in a cozy blanket, cups of coffee in hand, radiating comfort and peace of mind, in the background a professional chimney technician in dark navy branded uniform gives a confident thumbs-up near the hallway, the room glows with warm golden light, a sense of safety restored and home comfort renewed, ultra-realistic DSLR photography style, shallow depth of field, warm amber and navy color grading, no text overlays."
    }
)

# ── Launch all jobs in parallel ────────────────────────────────────────────────
Write-Host ""
Write-Host "Launching $($Jobs.Count) Higgsfield jobs in parallel..." -ForegroundColor Cyan
Write-Host "(Each job blocks until the image is ready — this may take 60–120 seconds)" -ForegroundColor DarkGray
Write-Host ""

$RunningJobs = @()

foreach ($j in $Jobs) {
    $jobName   = $j.Name
    $jobPrompt = $j.Prompt
    $jobOut    = Join-Path $OutDir "$jobName.jpg"

    $RunningJobs += Start-Job -Name $jobName -ScriptBlock {
        param($Bin, $Prompt, $OutPath, $Name)

        # Run Higgsfield and capture all output
        $raw = & $Bin generate create gpt_image_2 `
            --prompt $Prompt `
            --aspect_ratio "16:9" `
            --resolution "1080p" `
            --wait 2>&1 | Out-String

        # Extract URL
        $match = [regex]::Match($raw, 'https?://\S+')
        if (-not $match.Success) {
            return "[ERROR] $Name — no URL in output: $raw"
        }
        $url = $match.Value.TrimEnd('.')

        # Download
        try {
            Invoke-WebRequest -Uri $url -OutFile $OutPath -UseBasicParsing -ErrorAction Stop
            return "[OK] $Name.jpg — $url"
        } catch {
            return "[ERROR] $Name — download failed ($url): $_"
        }
    } -ArgumentList $HiggsBin, $jobPrompt, $jobOut, $jobName
}

# ── Wait for all and report ────────────────────────────────────────────────────
Write-Host "Waiting for all jobs to complete..." -ForegroundColor Yellow

$results = $RunningJobs | Wait-Job | Receive-Job

Write-Host ""
Write-Host "═══════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  RESULTS" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════" -ForegroundColor Cyan
foreach ($r in $results) {
    if ($r -like "[OK]*") {
        Write-Host $r -ForegroundColor Green
    } else {
        Write-Host $r -ForegroundColor Red
    }
}

# Cleanup jobs
$RunningJobs | Remove-Job -Force

# ── Summary ───────────────────────────────────────────────────────────────────
$saved = Get-ChildItem $OutDir -Filter "*.jpg" | Where-Object { $Jobs.Name -contains $_.BaseName }
Write-Host ""
Write-Host "$($saved.Count) / $($Jobs.Count) images saved to: $OutDir" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next step: reference these in your Hero components, e.g.:" -ForegroundColor DarkGray
Write-Host '  <img src="/heroes/hero-home.jpg" ... />' -ForegroundColor DarkGray
