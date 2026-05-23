export interface DcCity {
  slug: string;
  name: string;
  state: string;
  displayName: string;
  county: string;
  serviceAreas: string[];
}

export const dcCities: DcCity[] = [
  {
    slug: "washington-dc",
    name: "Washington DC",
    state: "DC",
    displayName: "Washington, DC",
    county: "District of Columbia",
    serviceAreas: ["Capitol Hill", "Georgetown", "Dupont Circle", "Shaw", "Woodley Park", "Chevy Chase DC"],
  },
  {
    slug: "baltimore-md",
    name: "Baltimore",
    state: "MD",
    displayName: "Baltimore, MD",
    county: "Baltimore City",
    serviceAreas: ["Federal Hill", "Fells Point", "Roland Park", "Towson", "Pikesville", "Catonsville"],
  },
  {
    slug: "arlington-va",
    name: "Arlington",
    state: "VA",
    displayName: "Arlington, VA",
    county: "Arlington County",
    serviceAreas: ["Clarendon", "Rosslyn", "Ballston", "Crystal City", "Lyon Village", "North Arlington"],
  },
  {
    slug: "alexandria-va",
    name: "Alexandria",
    state: "VA",
    displayName: "Alexandria, VA",
    county: "Alexandria City",
    serviceAreas: ["Old Town", "Del Ray", "Shirlington", "West End", "Potomac Yard", "Seminary Hill"],
  },
  {
    slug: "bethesda-md",
    name: "Bethesda",
    state: "MD",
    displayName: "Bethesda, MD",
    county: "Montgomery County",
    serviceAreas: ["Chevy Chase MD", "Kensington", "Silver Spring", "Rockville", "North Bethesda", "Potomac"],
  },
  {
    slug: "rockville-md",
    name: "Rockville",
    state: "MD",
    displayName: "Rockville, MD",
    county: "Montgomery County",
    serviceAreas: ["Gaithersburg", "Germantown", "North Potomac", "Derwood", "Wheaton", "Olney"],
  },
  {
    slug: "silver-spring-md",
    name: "Silver Spring",
    state: "MD",
    displayName: "Silver Spring, MD",
    county: "Montgomery County",
    serviceAreas: ["Takoma Park", "Colesville", "Burtonsville", "Wheaton", "Aspen Hill", "Kemp Mill"],
  },
  {
    slug: "reston-va",
    name: "Reston",
    state: "VA",
    displayName: "Reston, VA",
    county: "Fairfax County",
    serviceAreas: ["Herndon", "Sterling", "Ashburn", "Dulles", "Great Falls", "Oak Hill"],
  },
];

export const dcServiceSlugs = [
  "chimney-cleaning",
  "chimney-inspection",
  "chimney-repair",
  "chimney-sweep",
  "gas-fireplace-service",
  "dryer-vent-cleaning",
];

export function getDcCityBySlug(slug: string): DcCity | undefined {
  return dcCities.find((c) => c.slug === slug);
}

export function getAllDcCitySlugs(): string[] {
  return dcCities.map((c) => c.slug);
}
