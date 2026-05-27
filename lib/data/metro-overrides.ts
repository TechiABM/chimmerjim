export interface MetroServiceOverride {
  localIntro: string;
  extraSections: { title: string; content: string }[];
  extraFaqs: { q: string; a: string }[];
}

const overrides: Record<string, Record<string, MetroServiceOverride>> = {
  "washington-dc": {
    "chimney-repair": {
      localIntro:
        "Washington DC's housing stock presents chimney challenges you won't find in newer construction markets. More than half of DC's single-family homes and rowhouses were built before 1945 — many with original clay tile liners, aging dampers, and mortar joints that have absorbed 80+ years of DC's humid summers and hard winters. ChimmerJim's DC-area technicians are experienced with pre-war rowhouse construction, shared party-wall chimney stacks, and the repair techniques that aging DC masonry specifically requires.",
      extraSections: [
        {
          title: "Chimney Repair in DC's Rowhouses and Historic Homes",
          content:
            "The majority of DC's chimney repair calls come from pre-war rowhouses in Capitol Hill, Georgetown, Columbia Heights, Shaw, Petworth, and Dupont Circle. These homes typically have original clay tile flue liners that are 70–100 years old, multiple flues sharing a single chimney stack, and mortar joints that have been patched and repatched over generations. Our technicians work within the tight tolerances of rowhouse construction and can access individual flues without disturbing adjacent units. For homes in DC's historic districts, we're familiar with what work requires HPRB review and what doesn't — and we flag it at estimate time.",
        },
        {
          title: "How DC's Climate Accelerates Chimney Damage",
          content:
            "Washington DC experiences some of the harshest conditions for brick masonry in the mid-Atlantic. Summer humidity regularly exceeds 70–80%, allowing moisture to saturate masonry over months. When winter arrives, that absorbed water freezes, expands, and forces mortar joints and brick faces apart — a cycle that repeats every season. This is the primary driver of spalling bricks, crumbling mortar, and cracked crowns across DC's older neighborhoods. DC-area chimneys typically need attention sooner than those in drier climates, and catching damage early keeps repair costs far lower than a structural rebuild.",
        },
        {
          title: "DC, Maryland & Virginia Permits and Licensing",
          content:
            "Chimney repair permit requirements differ across the DMV. In Washington DC, structural chimney work — liner replacement, firebox modifications, stack rebuilds — generally requires a DCRA building permit; cosmetic repointing and crown coat repairs typically do not. Requirements in Maryland and Virginia vary by county. ChimmerJim is licensed, bonded, and insured in all three jurisdictions and handles permit applications for work that requires them. We tell you upfront at estimate time whether your repair is permit-required.",
        },
      ],
      extraFaqs: [
        {
          q: "Do I need a permit for chimney repair in Washington DC?",
          a: "It depends on the scope. Structural repairs — liner replacement, firebox modification, or rebuilding the stack — typically require a DCRA building permit. Cosmetic repairs like tuckpointing, crown coat, and cap replacement generally do not. ChimmerJim handles permit applications for work that requires one and will tell you at the estimate stage whether your job triggers a permit.",
        },
        {
          q: "My Capitol Hill rowhouse shares a chimney stack with the neighbor. Can you repair just my flue?",
          a: "Yes. In party-wall chimney stacks, each flue is a separate channel. We can reline, repair, or clean your individual flue without disturbing the adjacent unit. For structural repairs to the shared masonry stack itself, we can advise on how to coordinate with your neighbor if needed.",
        },
        {
          q: "Are there restrictions on chimney repair in DC's historic districts?",
          a: "Most chimney repairs — crown repair, tuckpointing, flashing, liner replacement — don't require Historic Preservation Review Board (HPRB) approval because they don't alter the chimney's visible character. Work that changes the chimney's height, profile, or exterior materials in a historic district may require review. We flag any potential review issues during the estimate.",
        },
        {
          q: "Can you repair chimneys in Maryland and Northern Virginia as well as DC?",
          a: "Yes. ChimmerJim is licensed in all three jurisdictions. We serve the full DC metro — Washington DC, Montgomery and Prince George's counties in Maryland, and Arlington, Alexandria, Fairfax, and Loudoun counties in Virginia. Same-day and next-day availability across all areas.",
        },
        {
          q: "DC summers are extremely humid. Does that damage my chimney even when I'm not using it?",
          a: "Yes — significantly. DC's summer humidity (regularly 70–80%+) saturates masonry over months. When freeze-thaw cycles follow in winter, that absorbed moisture expands and cracks mortar joints, spalls brick faces, and widens crown cracks. Damage occurs year-round, not just during fireplace season. This is why DC-area chimneys typically deteriorate faster than those in drier climates.",
        },
      ],
    },
  },
};

export function getMetroServiceOverride(
  metroSlug: string,
  serviceSlug: string
): MetroServiceOverride | undefined {
  return overrides[metroSlug]?.[serviceSlug];
}
