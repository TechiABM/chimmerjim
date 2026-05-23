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
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
