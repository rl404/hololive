import { HoloENGen1 } from "../gens/holo-en-1";
import { HoloENGen2Council, HoloENGen2Promise } from "../gens/holo-en-2";
import { HoloENGen3 } from "../gens/holo-en-3";
import { HoloENHope } from "../gens/holo-en-hope";
import { Group } from "../types";

export const HoloEN: Group = {
  id: "holo-en",
  type: "BRANCH",
  name: "Hololive English",
  startDate: new Date(Date.UTC(2020, 8, 12)),
  talents: [],
  groups: [
    HoloENGen1,
    HoloENHope,
    HoloENGen2Council,
    HoloENGen2Promise,
    HoloENGen3,
  ],
  events: [],
  badgeColor: "bg-violet-500 hover:bg-violet-400",
  borderColor: "border-violet-500",
};
