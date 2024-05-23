import { HoloDevIsGen1 } from "../gens/holo-dev_is-1";
import { Group } from "../types";

export const HoloDevIs: Group = {
  id: "holo-dev_is",
  type: "BRANCH",
  name: "Hololive DEV_IS",
  startDate: new Date(Date.UTC(2023, 8, 8)),
  talents: [],
  groups: [HoloDevIsGen1],
  events: [],
  badgeColor: "bg-black hover:bg-gray-500",
  borderColor: "border-black",
};
