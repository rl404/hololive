import {
  HoshimachiSuiseiIndie1,
  HoshimachiSuiseiIndie2,
} from "../talents/holo-jp-0-suisei";
import { Group } from "../types";

export const Indie: Group = {
  id: "indie",
  type: "INDIE",
  name: "Independent",
  startDate: new Date(Date.UTC(2018, 2, 22)),
  endDate: new Date(Date.UTC(2019, 4, 19)),
  talents: [HoshimachiSuiseiIndie1, HoshimachiSuiseiIndie2],
  groups: [],
  events: [],
  badgeColor: "bg-gray-500 hover:bg-gray-400",
  borderColor: "border-gray-500",
};
