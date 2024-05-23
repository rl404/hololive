import { HoloProCN } from "../branches/holo-cn";
import { HoloDevIs } from "../branches/holo-dev_is";
import { HoloEN } from "../branches/holo-en";
import { HoloID } from "../branches/holo-id";
import { HoloJP } from "../branches/holo-jp";
import { INNK } from "../branches/innk";
import { Group } from "../types";

export const Hololive: Group = {
  id: "hololive",
  type: "GROUP",
  name: "Hololive",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [],
  groups: [INNK, HoloJP, HoloProCN, HoloID, HoloEN, HoloDevIs],
  events: [],
};
