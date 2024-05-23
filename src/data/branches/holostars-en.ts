import { HolostarsENGen1 } from "../gens/holostars-en-1";
import { HolostarsENGen2 } from "../gens/holostars-en-2";
import { Group } from "../types";

export const HolostarsEN: Group = {
  id: "holostars-en",
  type: "BRANCH",
  name: "HOLOSTARS English",
  startDate: new Date(Date.UTC(2022, 6, 23)),
  talents: [],
  groups: [HolostarsENGen1, HolostarsENGen2],
  events: [],
  badgeColor: "bg-indigo-500 hover:bg-indigo-400",
  borderColor: "border-indigo-500",
};
