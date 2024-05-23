import { HolostarsEN } from "../branches/holostars-en";
import { HolostarsJP } from "../branches/holostars-jp";
import { Group } from "../types";

export const Holostars: Group = {
  id: "holostars",
  type: "GROUP",
  name: "HOLOSTARS",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [],
  groups: [HolostarsJP, HolostarsEN],
  events: [],
  badgeColor: "bg-purple-500 hover:bg-purple-400",
  borderColor: "border-purple-500",
};
