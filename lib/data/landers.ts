export type LanderPreset =
  | "default"
  | "free-estimate"
  | "seasonal"
  | "emergency"
  | "real-estate";

export interface LanderProcessStep {
  title: string;
  desc: string;
}

export interface LanderReview {
  name: string;
  location: string;
  text: string;
}

export interface AdsLander {
  campaign: string;        // URL slug, e.g. "chimney-repair-houston-tx"
  preset: LanderPreset;    // visual + tone treatment
  h1: string;
  heroSubtitle: string;
  keyword: string;
  city: string;
  state: string;
  phone: string;
  trustPoints: string[];
  bullets: string[];
  urgency: string;
  faqs: { q: string; a: string }[];
  metroSlug: string;
  serviceSlug: string;
  /** Optional single-line stat shown between hero and social proof. */
  proofStat?: string;
  /** Optional override of the mid-page CTA copy. */
  midCtaHeading?: string;
  midCtaSub?: string;
  /** 6–8 search-term-language problems we fix (QS: intent confirmation). */
  problems?: string[];
  /** 3–5 process steps (QS: in-home service anxiety reduction). */
  processSteps?: LanderProcessStep[];
  /** Override the auto-derived neighborhoods/cities list. */
  areasServed?: string[];
  /** 2–3 review snippets (QS: proof beyond star count). */
  reviews?: LanderReview[];
}

export const landers: AdsLander[] = [
  // ─── Existing campaigns (carried over with preset: "default") ────
  {
    campaign: "chimney-repair-washington-dc",
    preset: "default",
    h1: "Chimney Repair in Washington DC, Maryland & Virginia",
    heroSubtitle:
      "Cracked crowns, damaged masonry, leaking flashing, and fireplace issues repaired across DC, MD & VA. Call ChimmerJim for a same-day appointment.",
    keyword: "chimney repair washington dc",
    city: "Washington DC",
    state: "DC",
    phone: "2025553300",
    trustPoints: ["Licensed & insured in DC, MD, VA", "Same-day & next-day slots", "Free written estimate", "5-star rated — 500+ reviews"],
    bullets: ["Chimney crown & cap repair", "Mortar repointing & tuckpointing", "Flashing repair & replacement", "Damper & liner repair"],
    urgency: "Limited same-day slots available — call now to schedule",
    metroSlug: "washington-dc",
    serviceSlug: "chimney-repair",
    problems: [
      "Cracked or crumbling chimney crown",
      "Water leaking into the firebox",
      "Loose or spalling bricks",
      "Failing mortar joints (tuckpointing needed)",
      "Rusted or damaged chimney cap",
      "Leaking flashing where chimney meets roof",
      "White efflorescence staining on the brick",
      "Damper stuck open or won't close",
    ],
    faqs: [
      { q: "Do you repair chimneys in Washington DC?", a: "Yes — ChimmerJim serves Washington DC, Maryland, and Northern Virginia with same-day and next-day appointments." },
      { q: "How much does chimney repair cost in DC?", a: "Minor repairs start at $200. Crown repair runs $300–$700. Full repointing is $800–$3,000+ depending on size." },
      { q: "Can you repair a leaking chimney?", a: "Yes. Chimney leaks are usually caused by a cracked crown, failed flashing, or deteriorated mortar. We diagnose the source and repair it." },
      { q: "How fast can I get an appointment?", a: "We typically have same-day or next-day availability in the DC metro area." },
    ],
  },
  {
    campaign: "chimney-cleaning-houston-tx",
    preset: "default",
    h1: "Chimney Cleaning in Houston, TX",
    heroSubtitle: "Professional creosote removal for Houston-area homes. NFPA-certified technicians, same-day availability, and upfront pricing.",
    keyword: "chimney cleaning houston tx",
    city: "Houston",
    state: "TX",
    phone: "8325551200",
    trustPoints: ["NFPA-certified technicians", "Same-day slots available", "No-mess HEPA system", "5-star rated in Houston"],
    bullets: ["Full flue creosote removal", "Firebox & smoke shelf cleaning", "Camera inspection included", "Written cleaning report"],
    urgency: "Book before the heating season fills up",
    metroSlug: "houston-tx",
    serviceSlug: "chimney-cleaning",
    problems: [
      "12+ months since the last sweep",
      "Smoky smell when the fireplace isn't lit",
      "Dark creosote visible on the damper",
      "Smoke backing into the room during a fire",
      "Hard time starting or sustaining a fire",
      "You burn wood fires weekly",
      "Strong sooty smell after rain or storms",
      "Animal sounds or nesting debris in the flue",
    ],
    faqs: [
      { q: "Do you clean chimneys in Houston?", a: "Yes — ChimmerJim serves Houston and surrounding areas including The Woodlands, Sugar Land, Katy, Pearland, and Cypress." },
      { q: "How much does chimney cleaning cost in Houston?", a: "Standard single-flue cleaning runs $150–$280 in the Houston area." },
      { q: "How often should I clean my chimney in Houston?", a: "Annually if you burn wood regularly. Houston's humidity can accelerate creosote formation." },
    ],
  },

  // ─── Preset-aware sample landers ──────────────────────────────────
  {
    campaign: "free-chimney-estimate-near-me",
    preset: "free-estimate",
    h1: "Free Chimney Estimate — In Writing, On the Spot",
    heroSubtitle:
      "No pressure, no upsells. Our NFPA-certified technicians visit your home, inspect the chimney, and leave you with a written estimate. Booking is free. The visit is free. The estimate is free.",
    keyword: "chimney estimate near me",
    city: "Your Area",
    state: "",
    phone: "8005553900",
    trustPoints: ["100% free — no obligation", "Written estimate, every time", "NFPA-certified technicians", "Available same-day & weekends"],
    bullets: ["Free 30-minute on-site assessment", "Camera-assisted flue inspection", "Written, itemized estimate", "Clear repair priorities (urgent vs. cosmetic)", "Honest 'no repair needed' option", "Estimate valid for 60 days"],
    urgency: "Free estimates available all week — same-day in 23 metros",
    proofStat: "73% of our free estimates need no repair work",
    midCtaHeading: "Schedule your free estimate",
    midCtaSub: "Two minutes on the phone. We come to you. No pressure.",
    metroSlug: "houston-tx",
    serviceSlug: "chimney-inspection",
    problems: [
      "Buying or selling a home — chimney clause",
      "Visible cracks in the crown or masonry",
      "Water staining near the chimney inside",
      "Insurance asked for a recent inspection",
      "No inspection in the past 12 months",
      "Fireplace hasn't been used in years",
      "Lender or HOA requires documentation",
      "After a chimney fire or house fire",
    ],
    processSteps: [
      { title: "Tell us what you need",  desc: "Quick phone intake. We confirm the address, service area, and best on-site window." },
      { title: "We visit free",          desc: "An NFPA-certified technician walks the chimney inside and out, with camera if needed." },
      { title: "Written estimate",       desc: "Itemized, flat-rate quote. Urgent vs. cosmetic clearly marked. Valid for 60 days." },
      { title: "Decide on your timeline",desc: "No high-pressure scripts. You decide whether to proceed, when, and with whom." },
    ],
    faqs: [
      { q: "Is the estimate really free?", a: "Yes. We don't charge for the visit, the inspection, or the estimate. We make money when you choose to hire us — not before." },
      { q: "How long does the free estimate take?", a: "Most appointments take 30–45 minutes on-site. You'll have the written estimate before we leave." },
      { q: "What if I don't need any repairs?", a: "That's a great outcome — we'll tell you so, in writing. You owe nothing." },
      { q: "Can I get an estimate by phone?", a: "We can give ballpark ranges by phone, but accurate quotes require an on-site inspection. That visit is free." },
    ],
  },
  {
    campaign: "fall-chimney-cleaning-chicago-il",
    preset: "seasonal",
    h1: "Get Your Chimney Ready Before the First Cold Snap",
    heroSubtitle:
      "Heating season is here. Don't be the household that finds out about creosote build-up the hard way. Same-day NFPA-certified cleaning and inspection — book before the calendar fills.",
    keyword: "fall chimney cleaning chicago",
    city: "Chicago",
    state: "IL",
    phone: "3125551600",
    trustPoints: ["Booked solid in 2 weeks last year", "Same-day appointments today", "NFPA 211 certified sweeps", "Full report before first fire"],
    bullets: ["Full-flue creosote removal", "Crown & cap weather-readiness check", "Damper function test", "Cold-weather draft assessment", "Written report — keep it for insurance", "Pre-fire safety briefing"],
    urgency: "Fall slots filling fast — schedule before next week",
    proofStat: "Chimney fires peak in December — clean by November",
    midCtaHeading: "Lock in your pre-season slot",
    midCtaSub: "Calendar fills up by mid-October every year.",
    metroSlug: "chicago-il",
    serviceSlug: "chimney-cleaning",
    problems: [
      "Haven't swept since last winter",
      "Creosote glaze on the damper",
      "Hard to start a fire on cold mornings",
      "Smoke smell lingering in the house",
      "Bird nests or debris from summer",
      "Need it done before guests arrive",
      "Cold downdraft pulling in winter air",
      "Snow-cap or rain-cap missing or rusted",
    ],
    faqs: [
      { q: "When should I schedule before heating season?", a: "Late summer through early fall is ideal. By mid-October our calendar is typically 2–3 weeks out." },
      { q: "What happens if I skip a year?", a: "Creosote builds up in layers. Stage 1 is brushable; Stage 3 is glazed, nearly impossible to remove, and extremely flammable. Yearly cleaning prevents this." },
      { q: "Can you come before a forecasted storm?", a: "Yes — we keep emergency slots open for pre-storm cap and crown checks during severe weather windows." },
    ],
  },
  {
    campaign: "emergency-chimney-fire-washington-dc",
    preset: "emergency",
    h1: "Chimney Emergency? We're On the Way.",
    heroSubtitle:
      "Active smoke, an animal in the flue, a chimney fire aftermath — we triage emergency chimney calls 7 days a week. Same-day response in 23 metros. Speak to a real technician now.",
    keyword: "emergency chimney repair",
    city: "Washington DC",
    state: "DC",
    phone: "2025553300",
    trustPoints: ["Live dispatch 7 days a week", "Same-day on-site response", "Insurance-ready documentation", "Stop further damage immediately"],
    bullets: ["Post-chimney-fire safety check", "Active smoke / backdraft diagnosis", "Animal removal & flue securing", "Storm-damage emergency tarp", "Water-intrusion stabilization", "Insurance claim photo report"],
    urgency: "Live dispatch · technicians on call now",
    proofStat: "Median on-site response time: 3.2 hours",
    midCtaHeading: "Call now — we dispatch today",
    midCtaSub: "A real technician picks up. No menus, no waiting.",
    metroSlug: "washington-dc",
    serviceSlug: "chimney-repair",
    problems: [
      "Smoke filling the room right now",
      "I just had a chimney fire",
      "Animal stuck in the chimney",
      "Storm damaged the cap or crown",
      "Water actively leaking into the firebox",
      "Strong burning smell with no fire lit",
      "Cracked liner found in inspection",
      "Insurance claim pending — need report fast",
    ],
    processSteps: [
      { title: "Live dispatch picks up",  desc: "A real ChimmerJim technician answers. Triage the issue, confirm address, dispatch the closest truck." },
      { title: "Same-day on-site",        desc: "Median 3.2-hour arrival in our metros. We come with the gear to stabilize most emergencies on the first visit." },
      { title: "Stabilize first",         desc: "Stop the bleeding — tarp, board-up, seal, secure flue. Insurance-grade photo report captured on-site." },
      { title: "Full repair scope",       desc: "Written quote for the permanent fix, scheduled around your timeline and your insurance carrier's process." },
    ],
    faqs: [
      { q: "I think I had a chimney fire — what do I do right now?", a: "Don't use the fireplace until a Level 2 inspection clears it. Call us — we'll come the same day to assess heat damage to the liner and crown." },
      { q: "There's an animal stuck in my chimney.", a: "We handle animal removal safely and humanely. Don't light a fire or open the damper. Call us — we'll dispatch the same day." },
      { q: "Smoke is filling my room when I use the fireplace.", a: "Stop using the fireplace and ventilate. This is usually a draft, damper, or flue blockage issue — diagnosable same day." },
      { q: "Do you work with insurance for fire claims?", a: "Yes. We provide written, photo-documented reports formatted for insurance claims. Most carriers accept ours without callback." },
    ],
  },
  {
    campaign: "real-estate-chimney-inspection-boston-ma",
    preset: "real-estate",
    h1: "Level 2 Chimney Inspection for Home Buyers, Sellers & Agents",
    heroSubtitle:
      "Closing this month? A 60-minute Level 2 video inspection protects the deal — for buyers, sellers, and listing agents. Insurance-grade written report, delivered the same day.",
    keyword: "real estate chimney inspection",
    city: "Boston",
    state: "MA",
    phone: "6175551800",
    trustPoints: ["NFPA 211 Level 1, 2, 3 inspections", "Video camera scan of full flue", "Same-day written report", "Accepted by all major insurers"],
    bullets: ["Full video flue inspection", "Cap, crown, flashing assessment", "Damper & firebox evaluation", "Photo-documented PDF report", "Repair-vs-replace recommendations", "Direct delivery to all parties"],
    urgency: "Closing soon? Same-day inspection available",
    proofStat: "Reports delivered same-day to buyer, seller, and listing agent",
    midCtaHeading: "Book your inspection",
    midCtaSub: "Same-day scheduling for active escrow deadlines.",
    metroSlug: "boston-ma",
    serviceSlug: "chimney-inspection",
    problems: [
      "Inspection contingency window closing soon",
      "Buyer flagged the chimney in disclosures",
      "Listing prep — pre-inspection for sellers",
      "Lender requested NFPA 211 documentation",
      "Recent storm damage in the disclosure",
      "Pre-1980 home with original liner",
      "Insurance carrier requesting Level 2 report",
      "Agent needs deliverable for all three parties",
    ],
    processSteps: [
      { title: "Schedule around escrow",  desc: "Same-day or next-day visit timed to your contingency window. Agent / buyer / seller all CC'd on confirmation." },
      { title: "60-minute on-site",        desc: "NFPA 211 Level 1 + Level 2 video scan of the full flue. Cap, crown, flashing, damper, firebox all documented." },
      { title: "Same-day written report",  desc: "Insurance-grade PDF with photos and video frames. Findings written in plain language — no jargon." },
      { title: "Delivered to all parties", desc: "Direct email to buyer, seller, and listing agent. Repair-vs-replace recommendations included." },
    ],
    reviews: [
      {
        name: "Jennifer R.",
        location: "Listing agent · Boston Metro",
        text: "Booked the inspection on a Tuesday morning, had the report in buyer's hands by 4pm same day. Deal closed Friday. Use them every escrow now.",
      },
      {
        name: "Mark D.",
        location: "Homebuyer · Cambridge",
        text: "The video scan caught a cracked tile the general home inspector missed. Saved us a $4,200 surprise. Worth every dollar.",
      },
      {
        name: "Linda S.",
        location: "Seller · Brookline",
        text: "Pre-listing inspection let us address two minor crown cracks before the buyer's inspector even arrived. Smooth close, zero chimney negotiation.",
      },
    ],
    faqs: [
      { q: "When should the chimney inspection happen?", a: "During the standard home inspection contingency period — typically within 7–10 days of mutual acceptance. Same-day scheduling possible." },
      { q: "Does the report meet insurance requirements?", a: "Yes. Our Level 2 reports include video frames, NFPA 211 compliance notes, and photographic evidence accepted by all major US home insurers." },
      { q: "Can the inspection be a deal-killer?", a: "It can identify deal-relevant issues — that's the point. We deliver findings neutrally so both sides can negotiate from facts, not surprises." },
      { q: "Do you work directly with real-estate agents?", a: "Yes. Many of our metro markets have an agent contact line for fast scheduling. Ask when you call." },
    ],
  },
];

export function getLanderByCampaign(campaign: string): AdsLander | undefined {
  return landers.find((l) => l.campaign === campaign);
}

export function getAllCampaignSlugs(): string[] {
  return landers.map((l) => l.campaign);
}
