export interface RoadmapPhase {
  phase: number;
  title: string;
  items: string[];
  active: boolean;
}

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Foundation",
    items: ["Token Sale Launch", "Official Site Live"],
    active: true,
  },
  {
    phase: 2,
    title: "Growth",
    items: ["Dividend System Live", "Holder Benefits", "Holder Reports"],
    active: false,
  },
  {
    phase: 3,
    title: "Expansion",
    items: [
      "bitcastle Listing Application",
      "Marketing Push",
      "Liquidity Prep",
    ],
    active: false,
  },
  {
    phase: 4,
    title: "Listing",
    items: [
      "Official bitcastle Listing",
      "Target ¥10/WISE",
      "Next Phase Announcement",
    ],
    active: false,
  },
];
