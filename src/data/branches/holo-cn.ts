import { HoloCNGen1, HoloProCNGen1 } from "../gens/holo-cn-1";
import { HoloCNGen2 } from "../gens/holo-cn-2";
import { Group } from "../types";

export const HoloCN: Group = {
  id: "holo-cn",
  type: "BRANCH",
  name: "Hololive China",
  startDate: new Date(Date.UTC(2019, 8, 27)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [],
  groups: [HoloCNGen1],
  events: [],
  badgeColor: "bg-pink-500 hover:bg-pink-400",
  borderColor: "border-pink-500",
};

export const HoloProCN: Group = {
  id: "holopro-cn",
  type: "BRANCH",
  name: "Hololive China",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: new Date(Date.UTC(2020, 11, 27)),
  talents: [],
  groups: [HoloProCNGen1, HoloCNGen2],
  events: [],
  badgeColor: "bg-pink-500 hover:bg-pink-400",
  borderColor: "border-pink-500",
};
