import { HoloIDGen1 } from "../gens/holo-id-1";
import { HoloIDGen2 } from "../gens/holo-id-2";
import { HoloIDGen3 } from "../gens/holo-id-3";
import { Group } from "../types";

export const HoloID: Group = {
  id: "holo-id",
  type: "BRANCH",
  name: "Hololive Indonesia",
  startDate: new Date(Date.UTC(2020, 3, 10)),
  talents: [],
  groups: [HoloIDGen1, HoloIDGen2, HoloIDGen3],
  events: [],
  badgeColor: "bg-orange-500 hover:bg-orange-400",
  borderColor: "border-orange-500",
};
