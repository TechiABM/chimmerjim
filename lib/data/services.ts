export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceSection {
  title: string;
  content: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  intro: string;
  signs: string[];
  process: { step: string; detail: string }[];
  sections: ServiceSection[];
  faqs: FAQ[];
  priceRange: string;
  duration: string;
}

export const services: Service[] = [
  {
    slug: "chimney-cleaning",
    name: "Chimney Cleaning",
    shortName: "Cleaning",
    icon: "🧹",
    tagline: "Annual creosote removal for a safe, efficient fireplace",
    intro:
      "ChimmerJim's certified chimney cleaning service removes creosote, soot, and debris that accumulate with every fire. Our NFPA-trained technicians use rotary brushes and HEPA-vacuum systems to clean from cap to firebox, leaving no mess behind.",
    signs: [
      "12+ months since your last cleaning",
      "Visible soot or creosote buildup on the damper",
      "Strong smoky smell when the fireplace is not in use",
      "Smoke backing into the room during a fire",
      "Dark stains on the firebox walls",
      "You burn wood fires frequently",
    ],
    process: [
      { step: "Camera inspection", detail: "We inspect the full flue with a video camera before cleaning." },
      { step: "Cap & crown check", detail: "We assess the chimney cap, crown, and flashing for damage." },
      { step: "Drop cloth setup", detail: "We protect your floors and furniture before any work begins." },
      { step: "Rotary brush cleaning", detail: "Rotary brushes remove creosote and soot from liner to firebox." },
      { step: "HEPA vacuum capture", detail: "Industrial HEPA vacuums capture all debris — no dust in your home." },
      { step: "Firebox cleanup", detail: "We clean the firebox, damper, and smoke shelf thoroughly." },
      { step: "Post-clean report", detail: "You receive a written summary of cleaning results and any findings." },
    ],
    sections: [
      {
        title: "Why Annual Chimney Cleaning Matters",
        content:
          "The NFPA reports that failure to clean chimneys is a leading cause of chimney fires. Creosote — a byproduct of burning wood — builds up in layers. Stage 1 creosote is dusty and easy to brush away. Stage 3 is glazed, nearly impossible to remove, and extremely flammable. Annual cleaning keeps creosote at manageable levels before it becomes a fire hazard.",
      },
      {
        title: "What We Remove",
        content:
          "Our cleaning service removes first- and second-degree creosote, soot deposits, bird nests, leaves and debris, animal droppings, and any loose mortar or masonry fragments inside the flue. If we find Stage 3 glazed creosote, we'll advise on chemical treatments before the next use.",
      },
      {
        title: "NFPA Standards We Follow",
        content:
          "ChimmerJim follows NFPA 211 guidelines — the standard for chimneys, fireplaces, vents, and solid fuel-burning appliances. Our technicians are certified and carry liability insurance. We recommend annual cleaning for wood-burning fireplaces and every 2–3 years for gas fireplaces used regularly.",
      },
    ],
    faqs: [
      { q: "How often should I have my chimney cleaned?", a: "The NFPA recommends annual inspection and cleaning for wood-burning fireplaces. Gas fireplaces benefit from cleaning every 2–3 years depending on use." },
      { q: "Will the cleaning make a mess in my home?", a: "No. We use drop cloths and industrial HEPA vacuums that capture all soot and debris before it enters your living space." },
      { q: "How long does a chimney cleaning take?", a: "Most cleaning appointments take 1–2 hours for a standard single-flue chimney." },
      { q: "Can you clean a chimney that hasn't been used in years?", a: "Yes. In fact, long-unused chimneys often have debris, animal nests, and deteriorated mortar that needs to be addressed before using the fireplace." },
      { q: "Do you clean gas fireplaces too?", a: "Yes. We clean and inspect gas fireplaces, checking burners, logs, venting, and CO safety." },
      { q: "Do you need to go on the roof?", a: "We typically access the chimney from both the rooftop and from inside the firebox to ensure a complete clean." },
    ],
    priceRange: "$150–$300",
    duration: "1–2 hours",
  },
  {
    slug: "chimney-inspection",
    name: "Chimney Inspection",
    shortName: "Inspection",
    icon: "🔍",
    tagline: "Level 1, 2, and 3 inspections to catch issues before they become fires",
    intro:
      "A chimney inspection is your first line of defense against fire, CO poisoning, and structural damage. ChimmerJim performs Level 1, Level 2 (with video camera), and Level 3 inspections following NFPA 211 standards, giving you a clear picture of your chimney's condition.",
    signs: [
      "No inspection in the past 12 months",
      "Buying or selling a home",
      "After a chimney fire or house fire",
      "Visible cracks in the crown or masonry",
      "Water staining on the ceiling near the chimney",
      "Smoke or CO detector alerts during fireplace use",
    ],
    process: [
      { step: "Exterior assessment", detail: "We inspect cap, crown, flashing, masonry, and mortar from outside." },
      { step: "Interior assessment", detail: "We examine the firebox, damper, smoke shelf, and lower flue." },
      { step: "Video camera inspection", detail: "For Level 2, a camera is lowered through the full flue to detect cracks, blockages, and deterioration." },
      { step: "Documentation", detail: "All findings are photographed and documented in a written report." },
      { step: "Findings review", detail: "We walk you through the report and explain any issues found." },
      { step: "Repair recommendations", detail: "If repairs are needed, we provide a clear quote with options." },
    ],
    sections: [
      {
        title: "NFPA 211 Inspection Levels Explained",
        content:
          "Level 1 is a visual inspection — suitable for chimneys used normally with no changes to appliance or fuel type. Level 2 includes video camera inspection of the full flue and is required when buying or selling a home, after a fire, or when the appliance or fuel has changed. Level 3 is invasive and involves removing components to assess hidden areas — reserved for serious damage.",
      },
      {
        title: "Why Video Camera Inspection Matters",
        content:
          "Many chimney problems — cracked tiles, separated joints, deteriorated liner sections — are invisible from outside or from the firebox opening. A Level 2 video inspection is the only reliable way to see the full flue condition. ChimmerJim uses high-resolution cameras that capture every inch of the liner.",
      },
      {
        title: "Inspection for Home Buyers and Sellers",
        content:
          "A chimney inspection is critical when buying a home. Issues found during a real estate inspection can be used for negotiation and help buyers avoid costly surprises. Sellers who pre-inspect and address repairs can document their chimney's health as a selling point.",
      },
    ],
    faqs: [
      { q: "What's the difference between Level 1 and Level 2?", a: "Level 1 is a visual check of accessible areas. Level 2 includes a video camera inspection of the entire flue interior, required when buying/selling or after a fire." },
      { q: "How long does a Level 2 inspection take?", a: "About 1–1.5 hours for a standard single-flue chimney." },
      { q: "Do I need an inspection before selling my home?", a: "It's not legally required, but highly recommended. Most home buyers will request one as a contingency. Pre-inspecting lets you address issues on your timeline." },
      { q: "Can you do same-day inspection?", a: "Yes — ChimmerJim offers next-day and same-day inspection slots in most service areas." },
      { q: "Will the inspection report be accepted by my insurance company?", a: "Our written reports with photos are accepted by most insurance companies for claim purposes." },
      { q: "What if you find a serious problem during inspection?", a: "We'll explain the finding clearly and give you a repair estimate before any work begins. You're never obligated to repair on the same visit." },
    ],
    priceRange: "$99–$250",
    duration: "1–1.5 hours",
  },
  {
    slug: "chimney-repair",
    name: "Chimney Repair",
    shortName: "Repair",
    icon: "🔨",
    tagline: "Restore structural integrity — from cracked crowns to damaged masonry",
    intro:
      "ChimmerJim repairs chimneys from top to bottom: cracked crowns, damaged mortar joints, faulty flashing, deteriorated dampers, loose bricks, and failing liners. We diagnose first with a camera inspection, then repair with materials and techniques that last.",
    signs: [
      "Visible cracks in the chimney crown or cap",
      "White staining (efflorescence) on the exterior masonry",
      "Water leaks into the firebox or attic near the chimney",
      "Loose, spalling, or missing bricks",
      "Rusted or non-functioning damper",
      "Separation between the chimney and the house",
    ],
    process: [
      { step: "Camera diagnosis", detail: "We inspect the full flue to identify the root cause before any repair." },
      { step: "Scope & quote", detail: "We give you a detailed, line-item quote covering all repair areas." },
      { step: "Crown or cap repair", detail: "Cracked crowns are rebuilt with water-resistant crown coat material." },
      { step: "Mortar repointing", detail: "Deteriorated mortar joints are ground out and repointed with matching material." },
      { step: "Flashing repair", detail: "Leaking flashing is resealed or replaced at the chimney-to-roof junction." },
      { step: "Masonry repair", detail: "Loose, cracked, or spalling bricks are reset or replaced as needed." },
      { step: "Final inspection", detail: "We verify all repairs visually and with a camera before closing out." },
    ],
    sections: [
      {
        title: "Most Common Chimney Repairs",
        content:
          "Crown repairs are among the most common — the concrete cap at the top of the chimney cracks over time, allowing water infiltration. Tuckpointing restores deteriorated mortar joints between bricks. Flashing repair seals the chimney-to-roof joint. Damper replacement fixes stuck or rusted dampers that affect draft. Liner repair addresses cracked or broken flue tiles.",
      },
      {
        title: "Why Repair Sooner Rather Than Later",
        content:
          "Water is a chimney's primary enemy. A small crack in the crown or a failing mortar joint can allow water to penetrate deep into the masonry structure. Over time, freeze-thaw cycles expand this damage exponentially. What costs a few hundred dollars to repair today can cost several thousand if the masonry becomes structurally compromised.",
      },
      {
        title: "Repair Warranties",
        content:
          "ChimmerJim backs all masonry repairs with a 2-year workmanship warranty. Crown repairs and liner installations carry a 5-year warranty. We use industry-standard materials rated for outdoor masonry environments.",
      },
    ],
    faqs: [
      { q: "How do I know if my chimney needs repair vs. full rebuilding?", a: "A Level 2 inspection helps us determine the extent of damage. Minor to moderate damage — most chimneys — is repairable. We only recommend rebuilding when structural integrity is severely compromised." },
      { q: "Can chimney repair be done in winter?", a: "Most interior repairs can be done year-round. Exterior masonry work like tuckpointing should be done in temperatures above 40°F for proper mortar curing." },
      { q: "What causes chimney crowns to crack?", a: "Freeze-thaw cycles, thermal expansion and contraction, and UV exposure all cause crown cracking over time. Most crowns need attention every 5–10 years." },
      { q: "Why is my chimney leaking water?", a: "Common causes include a cracked crown, failed flashing, open damper, or deteriorated mortar joints. We diagnose the source before recommending repair." },
      { q: "Do you repair gas fireplace chimneys?", a: "Yes. We repair venting, flue damage, and structural issues in both wood-burning and gas fireplace systems." },
      { q: "How long does chimney repair take?", a: "Minor repairs (crown coat, repointing a section) typically take 2–4 hours. Larger repairs may require multiple visits." },
    ],
    priceRange: "$200–$3,000+",
    duration: "2 hours–2 days",
  },
  {
    slug: "chimney-sweep",
    name: "Chimney Sweep",
    shortName: "Sweep",
    icon: "🪣",
    tagline: "Traditional chimney sweeping — full-service creosote and soot removal",
    intro:
      "ChimmerJim's chimney sweep service is the traditional, comprehensive solution for wood-burning fireplaces. We sweep the full flue, firebox, smoke shelf, and damper area while protecting your home from mess. Same service, better technology.",
    signs: [
      "Your fireplace has been used this season",
      "You smell smoke in the house between fires",
      "Creosote is visible on the damper plate",
      "Your last sweep was more than 12 months ago",
      "You're starting a fire for the first time this season",
    ],
    process: [
      { step: "Pre-sweep inspection", detail: "We assess the flue, cap, and firebox before sweeping." },
      { step: "Firebox protection", detail: "Drop cloths and vacuum seals protect your living space." },
      { step: "Top-down sweep", detail: "Rotary brushes clear the flue from top to firebox." },
      { step: "Smoke shelf cleaning", detail: "The smoke shelf above the damper is cleaned and checked." },
      { step: "HEPA vacuum", detail: "All soot and debris are captured with industrial HEPA equipment." },
      { step: "Post-sweep walkthrough", detail: "We show you the result and note any issues that need attention." },
    ],
    sections: [
      {
        title: "Sweep + Inspect: The Smarter Option",
        content:
          "Most chimney professionals recommend combining a sweep with a Level 2 inspection. The sweep removes buildup so the camera can clearly see the liner condition. Getting both done in one visit saves time and ensures you're not just clean but also structurally safe.",
      },
    ],
    faqs: [
      { q: "What's the difference between a chimney sweep and chimney cleaning?", a: "They're essentially the same service. 'Chimney sweep' is the traditional term; 'chimney cleaning' is the modern equivalent. Both refer to creosote and soot removal from the flue." },
      { q: "How messy is a chimney sweep?", a: "With modern HEPA vacuum systems, a sweep should leave virtually no mess in your home." },
      { q: "Can I use my fireplace right after a sweep?", a: "Yes — once the sweep is complete and the firebox is reassembled, the chimney is ready for use." },
      { q: "How much does a chimney sweep cost?", a: "A standard single-flue sweep runs $150–$300 depending on creosote buildup and access." },
    ],
    priceRange: "$150–$300",
    duration: "1–2 hours",
  },
  {
    slug: "chimney-relining",
    name: "Chimney Relining",
    shortName: "Relining",
    icon: "🔧",
    tagline: "Stainless steel liner installation for a safe, code-compliant flue",
    intro:
      "A damaged or missing chimney liner is a serious safety hazard. ChimmerJim installs stainless steel flexible and rigid liner systems that meet NFPA 211 standards, restore draft performance, and protect your home from heat transfer and CO migration.",
    signs: [
      "Cracked or broken clay tile liner visible on camera",
      "A new insert or appliance is being installed",
      "Poor draft — smoke enters the room",
      "Previous chimney fire that may have cracked the liner",
      "Inspector recommended relining",
      "Chimney was built before 1980 (may be unlined)",
    ],
    process: [
      { step: "Level 2 inspection", detail: "Camera inspection confirms liner condition before any relining work." },
      { step: "System sizing", detail: "We calculate the correct liner diameter for your appliance's BTU output." },
      { step: "Liner selection", detail: "We recommend flexible or rigid stainless steel based on your flue shape." },
      { step: "Old liner removal", detail: "Where needed, broken tile sections are removed or stabilized." },
      { step: "Liner installation", detail: "New stainless liner is lowered and secured with proper top and bottom terminations." },
      { step: "Insulation (if required)", detail: "Gas appliances often require insulated liner wrap for efficiency and code." },
      { step: "Connection & test", detail: "The liner is connected to the appliance and draft-tested before sign-off." },
    ],
    sections: [
      {
        title: "Why Chimney Liners Fail",
        content:
          "Most homes built before 1940 have clay tile liners that were designed to last 50 years. Freeze-thaw cycles, chimney fires, and acid condensation from gas appliances crack tiles over time. A cracked liner allows combustion gases and heat to contact surrounding wood framing — a potential cause of house fires.",
      },
      {
        title: "Stainless Steel vs. Clay Tile",
        content:
          "Stainless steel liners — especially 316L alloy — are resistant to acid, heat, and moisture. They outlast clay tiles by decades, fit both straight and offset flues, and are code-compliant with NFPA 211. Rigid stainless is ideal for straight flues; flexible stainless handles offsets and bends.",
      },
    ],
    faqs: [
      { q: "Do all chimneys need a liner?", a: "Any chimney venting a wood-burning appliance or gas appliance should have an intact, properly sized liner. Unlined or damaged-liner chimneys are a fire and CO hazard." },
      { q: "How long does a stainless liner last?", a: "A properly installed 316L stainless steel liner typically lasts 20–30+ years with proper maintenance." },
      { q: "Can I reline without replacing the whole chimney?", a: "Yes. In most cases, we can install a new stainless liner inside the existing chimney without structural changes." },
      { q: "Does relining improve fireplace performance?", a: "Often yes. A correctly sized liner improves draft, reduces smoke backflow, and makes fires easier to start." },
      { q: "Is relining required when I install a new insert?", a: "Yes — installing a new insert or stove without a proper liner connection is a code violation in most jurisdictions." },
    ],
    priceRange: "$1,500–$4,500",
    duration: "1 day",
  },
  {
    slug: "chimney-cap-installation",
    name: "Chimney Cap Installation",
    shortName: "Cap Install",
    icon: "🏠",
    tagline: "Keep rain, animals, and debris out of your flue",
    intro:
      "A chimney cap is your chimney's first line of defense. ChimmerJim installs and replaces custom-fit stainless steel and copper chimney caps that block rain, animals, leaves, and downdrafts — protecting your liner, damper, and firebox from moisture damage.",
    signs: [
      "No cap currently on the chimney",
      "Existing cap is cracked, rusted, or missing the mesh",
      "Animals or birds getting into the chimney",
      "Rain coming into the firebox",
      "Leaves and debris in the firebox",
      "Strong downdrafts during wind",
    ],
    process: [
      { step: "Measurement", detail: "We measure the flue opening(s) and chimney crown for exact fit." },
      { step: "Cap selection", detail: "We recommend the right style — single-flue, multi-flue, or full-width coverage." },
      { step: "Old cap removal", detail: "Existing damaged cap is removed and the crown is inspected." },
      { step: "Cap installation", detail: "New cap is anchored securely to the crown or liner top." },
      { step: "Screen integrity check", detail: "We verify the screen mesh meets spark arrest requirements." },
    ],
    sections: [
      {
        title: "What a Chimney Cap Prevents",
        content:
          "Rain entering an uncapped chimney causes rapid liner deterioration, rust on the damper, and water stains on the firebox. Animals — particularly birds, squirrels, and raccoons — nest inside uncapped chimneys. A proper cap with mesh prevents all of this while still allowing smoke to draft freely.",
      },
    ],
    faqs: [
      { q: "What material is best for a chimney cap?", a: "Stainless steel 304 is the standard for durability. Copper caps are premium and develop a beautiful patina. Galvanized steel is cheaper but rusts faster." },
      { q: "Can I install a cap myself?", a: "Rooftop cap installation involves ladder safety and proper anchoring. We recommend professional installation." },
      { q: "Does a cap affect draft?", a: "A properly designed cap has no negative effect on draft and actually reduces downdraft turbulence." },
    ],
    priceRange: "$150–$600",
    duration: "1–2 hours",
  },
  {
    slug: "chimney-waterproofing",
    name: "Chimney Waterproofing",
    shortName: "Waterproofing",
    icon: "💧",
    tagline: "Vapor-permeable sealant that keeps water out while letting moisture escape",
    intro:
      "Water is the leading cause of chimney deterioration. ChimmerJim applies professional-grade, vapor-permeable waterproofing sealants that penetrate masonry to block water infiltration from outside while allowing trapped moisture vapor to escape — protecting your chimney from the inside out.",
    signs: [
      "White efflorescence staining on the exterior brick",
      "Water stains inside the firebox",
      "Spalling or flaking bricks on the exterior",
      "Mortar joints visibly eroding",
      "Your chimney is more than 10 years old and has never been sealed",
    ],
    process: [
      { step: "Surface prep", detail: "Masonry is cleaned and any existing sealers or efflorescence are treated." },
      { step: "Crack repair", detail: "Minor cracks and joint deterioration are filled before sealing." },
      { step: "Sealant application", detail: "Two coats of water-repellent sealant are applied with back-rolled coverage." },
      { step: "Cure time", detail: "The sealant requires 24 hours to fully cure before rain exposure." },
    ],
    sections: [
      {
        title: "Why Vapor-Permeable Matters",
        content:
          "Regular paint or silicone caulk traps moisture inside the masonry, accelerating freeze-thaw damage. Professional chimney waterproofing uses vapor-permeable chemistry that forms a water-repellent barrier from the outside while allowing moisture vapor from inside the masonry to escape freely.",
      },
    ],
    faqs: [
      { q: "How long does waterproofing last?", a: "Professional-grade chimney waterproofing typically lasts 5–10 years depending on weather exposure and masonry condition." },
      { q: "Should waterproofing be done before or after repairs?", a: "Always after repairs. We complete any crown repair, tuckpointing, or masonry work before applying the sealant." },
      { q: "Does waterproofing change the look of the brick?", a: "High-quality vapor-permeable sealants are invisible when applied correctly — the brick looks the same but repels water." },
    ],
    priceRange: "$300–$900",
    duration: "2–4 hours",
  },
  {
    slug: "fireplace-repair",
    name: "Fireplace Repair",
    shortName: "Fireplace Repair",
    icon: "🔥",
    tagline: "Gas, wood, and electric fireplace repair — restore performance and safety",
    intro:
      "ChimmerJim repairs all types of fireplaces: wood-burning, gas, and electric. From broken grates and cracked fireboxes to non-igniting gas burners and damaged surrounds, we diagnose and repair fireplace problems that affect safety, efficiency, and aesthetics.",
    signs: [
      "Gas fireplace won't ignite or stay lit",
      "Cracks in the firebox or fireback panel",
      "Smoke entering the room when the fireplace is used",
      "Discolored or misshapen ceramic logs",
      "Pilot light issues or flame height problems",
      "Damaged glass doors or gaskets",
    ],
    process: [
      { step: "Diagnosis", detail: "We identify the specific component failure — igniter, valve, burner, liner, or firebox." },
      { step: "Parts assessment", detail: "We determine if repair or replacement parts are needed." },
      { step: "Repair", detail: "Component replacement, refractory panel patching, or flue correction as required." },
      { step: "Safety test", detail: "Full safety test including CO check for gas fireplaces before sign-off." },
    ],
    sections: [
      {
        title: "Gas vs. Wood Fireplace Repairs",
        content:
          "Gas fireplace repairs typically involve igniter systems, thermopile/thermocouple replacement, valve adjustment, or pilot assembly cleaning. Wood fireplace repairs often focus on the firebox structure (cracked refractory panels), damper function, and flue integrity. We handle both.",
      },
    ],
    faqs: [
      { q: "My gas fireplace turns on but won't stay lit — what's wrong?", a: "Most commonly a failing thermocouple or thermopile. These safety sensors shut off gas if they don't detect a steady flame. Replacement is typically straightforward." },
      { q: "Can you repair a cracked firebox?", a: "Minor cracks in refractory panels can be repaired with refractory cement. Severely damaged panels should be replaced." },
      { q: "Is a smoking fireplace dangerous?", a: "Yes. Smoke backing into the room indicates a draft problem that can expose occupants to CO and soot. Don't use a smoking fireplace until the cause is diagnosed." },
    ],
    priceRange: "$150–$1,500",
    duration: "2–4 hours",
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    shortName: "Dryer Vent",
    icon: "🌀",
    tagline: "Lint removal to prevent the #1 cause of dryer fires",
    intro:
      "Clogged dryer vents cause over 15,000 house fires annually, according to the NFPA. ChimmerJim's dryer vent cleaning service removes lint buildup from the full vent path — from dryer connection to exterior termination — in under an hour.",
    signs: [
      "Clothes take longer than one cycle to dry",
      "Dryer feels very hot to the touch after a cycle",
      "Burning smell when the dryer is running",
      "Lint visible around the dryer vent exterior cap",
      "It's been more than 12 months since cleaning",
      "You run the dryer daily",
    ],
    process: [
      { step: "Vent system assessment", detail: "We map the vent path and identify the duct material and route length." },
      { step: "Rotary brush cleaning", detail: "Flexible rotary brushes clean the full vent from dryer to exterior cap." },
      { step: "High-velocity air flush", detail: "Compressed air clears residual lint from the duct." },
      { step: "Exterior cap inspection", detail: "We inspect and clear the exterior damper flap." },
      { step: "Airflow verification", detail: "We measure airflow before and after to confirm the improvement." },
    ],
    sections: [
      {
        title: "Why Dryer Vent Cleaning Is a Fire Safety Issue",
        content:
          "Lint is highly flammable. When it accumulates in the dryer vent, it can ignite from the dryer's heat element. The NFPA reports dryers cause roughly 15,970 home structure fires per year, with failure to clean the dryer vent being the leading factor. Annual cleaning is the simple prevention.",
      },
    ],
    faqs: [
      { q: "How often should dryer vents be cleaned?", a: "Annually for households that do 3+ loads per week. Every 18–24 months for lighter use." },
      { q: "Can a clogged dryer vent cause mold?", a: "Yes — a restricted vent can cause warm, moist air to back up into walls, creating mold conditions." },
      { q: "Do you clean vents that exit through the roof?", a: "Yes. We clean roof-exit and wall-exit configurations." },
      { q: "Can you reroute a dryer vent that's too long or kinked?", a: "Yes. We offer vent rerouting if the current path has too many bends or exceeds code-maximum length." },
    ],
    priceRange: "$100–$200",
    duration: "45 min–1.5 hours",
  },
  {
    slug: "masonry-repair",
    name: "Masonry Repair",
    shortName: "Masonry",
    icon: "🧱",
    tagline: "Tuckpointing, spalling brick repair, and chimney crown rebuilding",
    intro:
      "ChimmerJim's masonry repair service addresses the structural and cosmetic damage that weather, age, and water cause to brick and mortar chimneys. From tuckpointing single sections to full chimney crown rebuilds, we restore your chimney's integrity and appearance.",
    signs: [
      "Mortar joints are crumbling or missing between bricks",
      "Bricks are spalling (flaking faces) or cracked",
      "White efflorescence on the brick surface",
      "Loose or fallen bricks at the chimney top",
      "Water stains on interior walls near the chimney",
    ],
    process: [
      { step: "Assessment", detail: "We examine all masonry surfaces, identify deteriorated joints and damaged bricks." },
      { step: "Joint grinding", detail: "Deteriorated mortar is ground out to a clean depth for proper adhesion." },
      { step: "Tuckpointing", detail: "New mortar matched to the original is packed into joints and tooled to profile." },
      { step: "Spalling brick repair", detail: "Severely damaged bricks are replaced with matched units." },
      { step: "Crown repair or rebuild", detail: "Cracked or failed crowns are repaired with hydraulic crown coat or rebuilt." },
      { step: "Sealing", detail: "Waterproofing sealant is applied after all masonry work is complete." },
    ],
    sections: [
      {
        title: "Tuckpointing vs. Full Repointing",
        content:
          "Tuckpointing specifically repairs the visual mortar joints and doesn't necessarily address deep structural mortar failure. Full repointing grinds out all deteriorated mortar to proper depth and replaces it completely. For chimneys exposed to weather, full repointing is often the more durable solution.",
      },
    ],
    faqs: [
      { q: "How do I know if my chimney needs tuckpointing vs. rebuilding?", a: "If more than 50% of the mortar joints are deteriorated or bricks are structurally compromised, a partial or full rebuild may be necessary. Tuckpointing works well when the bricks are sound and fewer than half the joints need attention." },
      { q: "Can you match the existing mortar color?", a: "Yes. We mix mortar to closely match existing joints for a seamless result." },
      { q: "How long does tuckpointing last?", a: "Quality tuckpointing with proper materials in a maintained chimney typically lasts 20–30 years." },
    ],
    priceRange: "$400–$5,000+",
    duration: "1 day–several days",
  },
  {
    slug: "gas-fireplace-service",
    name: "Gas Fireplace Service",
    shortName: "Gas Fireplace",
    icon: "⛽",
    tagline: "Annual gas fireplace tuneup, CO check, and safety inspection",
    intro:
      "Gas fireplaces need annual service — cleaning burners, checking the pilot assembly, inspecting venting, and testing for CO emissions. ChimmerJim's gas fireplace service covers all of this in a single appointment, giving you confidence before every heating season.",
    signs: [
      "Gas fireplace hasn't been serviced in 12+ months",
      "Pilot light is difficult to ignite or keep lit",
      "Flames are yellow or orange instead of blue",
      "Sooty deposits on the glass or surrounding tile",
      "Unusual smell when the fireplace is on",
    ],
    process: [
      { step: "Visual inspection", detail: "We inspect burner, logs, pilot assembly, and glass door condition." },
      { step: "Burner cleaning", detail: "Burner ports and ceramic logs are cleaned of soot and debris." },
      { step: "Pilot check", detail: "Pilot assembly, thermocouple, and thermopile are tested and cleaned." },
      { step: "Venting inspection", detail: "Direct vent or B-vent is inspected for blockage or deterioration." },
      { step: "CO test", detail: "CO output is measured at the register and compared to safe limits." },
      { step: "Operation test", detail: "Full on/off cycle is tested, including remote or wall switch function." },
    ],
    sections: [
      {
        title: "CO Safety and Gas Fireplaces",
        content:
          "A poorly vented or malfunctioning gas fireplace can produce CO — an odorless, colorless gas that is dangerous at low concentrations. Annual service that includes a CO test and venting inspection is the responsible approach to gas fireplace ownership.",
      },
    ],
    faqs: [
      { q: "Do gas fireplaces need annual service?", a: "Yes. Even if the fireplace appears to work fine, burners collect soot and vents can become partially blocked. Annual service maintains efficiency and safety." },
      { q: "Can you service all brands of gas fireplaces?", a: "We service most major brands including Napoleon, Regency, Heat & Glo, Heatilator, Valor, and more." },
      { q: "Does gas fireplace service include repairing the igniter?", a: "If the igniter, thermocouple, or thermopile is found to be faulty during service, we can replace it on the same visit in most cases." },
    ],
    priceRange: "$120–$250",
    duration: "1–2 hours",
  },
  {
    slug: "fireplace-flue-cleaning",
    name: "Fireplace & Flue Cleaning",
    shortName: "Flue Cleaning",
    icon: "🧹",
    tagline: "Complete fireplace and flue cleaning — creosote, soot, and debris removed",
    intro:
      "ChimmerJim's fireplace and flue cleaning service thoroughly cleans your entire system from the firebox to the chimney cap. Our NFPA-certified technicians remove creosote, soot, and debris from the flue liner, smoke shelf, damper, and firebox using rotary brushes and HEPA-vacuum systems — leaving your fireplace clean, safe, and ready to use.",
    signs: [
      "Smoky smell inside the home when the fireplace isn't in use",
      "Visible soot or creosote deposits on the damper or firebox walls",
      "Last cleaning was more than 12 months ago",
      "Smoke enters the room when you light a fire",
      "Dark staining around the firebox opening",
      "You burn wood fires regularly through the season",
    ],
    process: [
      { step: "Flue camera check", detail: "We inspect the flue liner with a video camera to assess creosote buildup before cleaning." },
      { step: "Firebox and hearth protection", detail: "Drop cloths protect your floors and furniture before any work begins." },
      { step: "Cap and crown inspection", detail: "We inspect the chimney cap, crown, and flashing from the rooftop." },
      { step: "Rotary brush flue cleaning", detail: "Rotary brushes clear creosote and soot from the flue liner top to bottom." },
      { step: "Smoke shelf and damper cleaning", detail: "The smoke shelf, damper plate, and lower flue are thoroughly cleaned." },
      { step: "HEPA vacuum capture", detail: "Industrial HEPA vacuums capture all debris so no soot enters your living space." },
      { step: "Written report", detail: "You receive a post-cleaning summary with any findings that need attention." },
    ],
    sections: [
      {
        title: "Why Fireplace and Flue Cleaning Is a Safety Issue",
        content:
          "The NFPA identifies failure to clean chimneys as a leading cause of chimney fires. Creosote — the byproduct of burning wood — accumulates in stages. Stage 1 is dusty and brushable. Stage 3 is glazed, highly flammable, and nearly impossible to remove without chemical treatment. Annual cleaning keeps your fireplace operating safely by removing buildup before it reaches dangerous levels.",
      },
      {
        title: "What We Clean",
        content:
          "Our service covers the complete flue system: the flue liner from cap to firebox, the smoke shelf above the damper, the damper plate, the firebox walls and floor, and the ash pit if present. If we find Stage 3 creosote, we advise on chemical treatment options before further use.",
      },
      {
        title: "NFPA Standards We Follow",
        content:
          "ChimmerJim follows NFPA 211 guidelines for chimney and fireplace maintenance. Our technicians are NFPA-trained and carry full liability insurance. We recommend annual cleaning for wood-burning fireplaces and every 2–3 years for gas systems used regularly.",
      },
    ],
    faqs: [
      { q: "How often should I have my fireplace and flue cleaned?", a: "Annually for wood-burning fireplaces per NFPA guidelines. Gas fireplaces benefit from cleaning every 2–3 years depending on usage." },
      { q: "Will the cleaning make a mess in my home?", a: "No. We use drop cloths and industrial HEPA vacuums that capture all soot and debris before it enters your living space." },
      { q: "How long does a fireplace and flue cleaning take?", a: "Most appointments take 1–2 hours for a standard single-flue system." },
      { q: "Can you clean a fireplace that hasn't been used in years?", a: "Yes. Long-unused fireplaces often have debris, animal nests, and deteriorated mortar that should be addressed before any fires are lit." },
      { q: "Do you also inspect during the cleaning?", a: "Yes — we include a basic inspection with every cleaning. If we identify issues that require a Level 2 video inspection, we'll advise you on next steps." },
      { q: "Do you need to go on the roof?", a: "Typically yes — we access the chimney from both the rooftop and the firebox to ensure a complete clean." },
    ],
    priceRange: "$150–$300",
    duration: "1–2 hours",
  },
  {
    slug: "chimney-services",
    name: "Chimney Services",
    shortName: "Services",
    icon: "🏠",
    tagline: "Full-service chimney cleaning, inspection, repair, and more",
    intro:
      "ChimmerJim provides a complete range of chimney services — from annual cleaning and NFPA-certified inspection to structural repair, liner replacement, cap installation, and waterproofing. One call covers every chimney need, with NFPA-trained technicians available same-day across all service areas.",
    signs: [
      "You haven't had any chimney service in the past 12 months",
      "You notice smoke, smell, or sounds from the chimney",
      "Water stains near the chimney on ceilings or walls",
      "Visible cracks, spalling bricks, or deteriorated mortar",
      "Animals or debris entering through the chimney",
      "You're buying, selling, or have just moved into a home",
    ],
    process: [
      { step: "Assessment call", detail: "We discuss your chimney's symptoms and history to recommend the right service." },
      { step: "On-site inspection", detail: "A technician inspects your full chimney system before any work is performed." },
      { step: "Cleaning (if needed)", detail: "Creosote, soot, and debris are removed from flue to firebox." },
      { step: "Repair scope", detail: "Any structural, masonry, or component issues are documented with a quote." },
      { step: "Approved repairs", detail: "Repairs are carried out per your approval — crown, liner, cap, tuckpointing, waterproofing." },
      { step: "Final check", detail: "We verify all work and provide a written report with photos." },
    ],
    sections: [
      {
        title: "All Chimney Services Under One Roof",
        content:
          "Rather than calling different contractors for cleaning, inspection, and repair, ChimmerJim handles the full scope. Our technicians are trained across all chimney service types — so if cleaning reveals a liner crack or a failing crown, we can address it on the same visit or schedule a follow-up without switching companies.",
      },
      {
        title: "Routine vs. Emergency Service",
        content:
          "We handle both scheduled annual maintenance and urgent chimney problems. If you're dealing with a chimney fire aftermath, sudden smoke intrusion, or animal entry, our team can respond quickly. Regular maintenance visits include cleaning, Level 1 inspection, and a condition report so you're never caught off guard.",
      },
    ],
    faqs: [
      { q: "What chimney services do you offer?", a: "Cleaning, Level 1/2/3 inspection, repair (crown, flashing, mortar, bricks), liner installation, cap installation, waterproofing, gas fireplace service, and dryer vent cleaning." },
      { q: "Can you handle both cleaning and repair in one visit?", a: "Yes. We often combine cleaning with minor repairs in a single appointment to save you time." },
      { q: "How quickly can you schedule a chimney service?", a: "We offer same-day and next-day appointments in most service areas." },
      { q: "Do you service gas fireplaces as well as wood-burning?", a: "Yes — we service all fireplace types including wood-burning, gas, and electric systems." },
      { q: "Are your technicians certified?", a: "Yes. ChimmerJim technicians are NFPA-trained, licensed, and insured." },
    ],
    priceRange: "$99–$5,000+",
    duration: "Varies by service",
  },
  {
    slug: "emergency-chimney-repair",
    name: "Emergency Chimney Repair",
    shortName: "Emergency Repair",
    icon: "🚨",
    tagline: "Fast response for chimney damage, leaks, and post-fire emergencies",
    intro:
      "When a chimney problem can't wait, ChimmerJim responds fast. Our emergency chimney repair service addresses urgent damage — post-fire structural issues, active water leaks into the home, collapsed crowns, fallen masonry, and compromised flashing — with same-day or next-day appointments across all service areas.",
    signs: [
      "Active water leak into the firebox, attic, or interior walls",
      "Chimney fire has occurred recently",
      "Bricks or masonry have fallen from the chimney",
      "Crown has collapsed or separated",
      "Smoke or CO alarm triggered during fireplace use",
      "Visible structural damage after a storm",
    ],
    process: [
      { step: "Emergency assessment", detail: "We inspect the full chimney immediately to identify all damage and safety hazards." },
      { step: "Hazard containment", detail: "Immediate steps are taken to prevent further water intrusion or structural risk." },
      { step: "Repair scope", detail: "We document all damage and provide a clear, itemized quote before work begins." },
      { step: "Priority repairs", detail: "Critical repairs — crown, flashing, structural masonry — are completed as the top priority." },
      { step: "Waterproofing and sealing", detail: "After structural repairs, affected masonry is sealed to prevent further water infiltration." },
      { step: "Final inspection", detail: "All repairs are verified with a camera and visual inspection before sign-off." },
    ],
    sections: [
      {
        title: "When to Call for Emergency Chimney Repair",
        content:
          "Not every chimney issue is an emergency, but some are. A chimney fire — even a small one — requires immediate professional inspection before the fireplace is used again. Active water leaks during or after rain can cause rapid damage to framing and insulation. Fallen masonry near entry points is a safety hazard. If any of these apply, call ChimmerJim immediately rather than scheduling a routine appointment.",
      },
      {
        title: "Common Emergency Chimney Repairs",
        content:
          "Crown repairs are the most frequent emergency — a fully cracked or collapsed crown allows unrestricted water entry. Flashing failure at the chimney-to-roof junction causes leaks that appear as ceiling stains or wet attic insulation. Post-chimney-fire liner inspection and repair is required by NFPA standards before resuming use. Fallen bricks at the chimney stack require immediate stabilization.",
      },
      {
        title: "Documentation for Insurance Claims",
        content:
          "ChimmerJim provides written reports with before-and-after photographs for all emergency repairs. Our documentation is accepted by most homeowner insurance carriers for claim submission. If you've experienced storm damage or a chimney fire, our report provides the evidence your adjuster needs.",
      },
    ],
    faqs: [
      { q: "Can I use my fireplace after a chimney fire?", a: "No — not until a Level 2 inspection confirms the liner and structure are intact. Even small chimney fires can crack the liner in ways that create a fire hazard for the next use." },
      { q: "How quickly can you respond to an emergency?", a: "We offer same-day emergency appointments in most service areas. Call us directly for fastest dispatch." },
      { q: "Will my homeowner's insurance cover chimney repair?", a: "Coverage depends on your policy and the cause of damage. Storm damage and fire aftermath are commonly covered. We provide documentation to support your claim." },
      { q: "My chimney is leaking during rain — is that an emergency?", a: "Yes. Active water intrusion should be addressed immediately. Water can damage framing, insulation, and interior finishes rapidly if not contained." },
      { q: "Can you do temporary repairs to stop water intrusion fast?", a: "Yes. We can apply emergency tarping and sealant measures to halt water entry while permanent repairs are scheduled." },
      { q: "Do you repair chimney damage from storms?", a: "Yes — fallen caps, cracked crowns, separated flashing, and dislodged masonry from storm events are all within our emergency repair scope." },
    ],
    priceRange: "$300–$5,000+",
    duration: "Same-day–2 days",
  },
  {
    slug: "chimney-cap-crown-repair",
    name: "Chimney Cap & Crown Repair",
    shortName: "Cap & Crown",
    icon: "🔧",
    tagline: "Stop water damage at the source — cap and crown repair by certified technicians",
    intro:
      "The chimney cap and crown are your chimney's primary defense against water intrusion. ChimmerJim repairs and replaces cracked crowns, installs new stainless steel chimney caps, and seals deteriorated crown coat — stopping leaks before they damage your liner, damper, and interior structure.",
    signs: [
      "Visible cracks in the concrete crown at the top of the chimney",
      "Cap is rusted, broken, or missing entirely",
      "Water entering the firebox during or after rain",
      "Animals or birds getting into the chimney",
      "White efflorescence staining on the brick below the crown",
      "Downdrafts or wind-driven rain coming down the flue",
    ],
    process: [
      { step: "Rooftop assessment", detail: "We inspect the cap, crown, and upper masonry to identify all damage." },
      { step: "Cap removal", detail: "Existing damaged or missing cap is removed and the flue top is measured." },
      { step: "Crown repair or rebuild", detail: "Cracked crowns are repaired with hydraulic crown coat or fully rebuilt if structurally compromised." },
      { step: "Crown sealing", detail: "After repair, the crown surface is sealed with a water-repellent, flexible elastomeric coating." },
      { step: "New cap installation", detail: "A custom-fit stainless steel cap is anchored securely over the flue opening(s)." },
      { step: "Screen and spark arrest check", detail: "Cap mesh is verified to meet local spark arrestor requirements." },
    ],
    sections: [
      {
        title: "Why the Crown and Cap Fail",
        content:
          "The chimney crown — the concrete slab that covers the top of the chimney structure around the flue — is exposed to UV, freeze-thaw cycles, and rain year-round. Most crowns develop hairline cracks within 5–10 years that widen over time. Without a cap, rain falls directly into the flue. Together, a failed crown and missing cap allow water to penetrate deep into the masonry and liner, causing damage that compounds each season.",
      },
      {
        title: "Cap vs. Crown — What's the Difference",
        content:
          "The crown is the concrete or mortar slab at the top of the chimney structure. It slopes away from the flue to shed water. The cap is the metal cover that sits over the flue opening itself, preventing rain, debris, and animals from entering. Both work together — a repaired crown without a proper cap still allows water and animal entry, and a cap alone won't stop water infiltrating through a cracked crown.",
      },
      {
        title: "Materials We Use",
        content:
          "Crown repairs use flexible, hydraulic crown coat material that bonds to existing concrete and expands and contracts with temperature changes — unlike rigid Portland cement, which cracks again quickly. Chimney caps are installed in 304 stainless steel as the standard; copper caps are available as a premium upgrade that develops a natural patina.",
      },
    ],
    faqs: [
      { q: "Can a cracked chimney crown be repaired, or does it need to be replaced?", a: "Minor to moderate cracking can be repaired with elastomeric crown coat. Severely deteriorated crowns with structural compromise are rebuilt with new mortar and crown material." },
      { q: "How long does a crown repair last?", a: "A properly applied elastomeric crown coat repair typically lasts 10–15 years. We back crown repairs with a 5-year workmanship warranty." },
      { q: "What type of chimney cap should I get?", a: "304 stainless steel is the standard for durability and rust resistance. Copper is premium and lasts indefinitely. We do not recommend galvanized steel caps — they rust within a few years in most climates." },
      { q: "My cap blew off in a storm — how quickly can you replace it?", a: "Same-day or next-day in most service areas. An uncapped flue is exposed to weather and animals, so we prioritize these calls." },
      { q: "Does a chimney cap affect draft?", a: "A properly designed cap improves draft stability by reducing downdraft turbulence. It does not restrict airflow." },
      { q: "Can I see the damage before you do any work?", a: "Yes — we photograph all damage at the rooftop and show you the images before recommending any repairs." },
    ],
    priceRange: "$250–$1,200",
    duration: "2–4 hours",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
