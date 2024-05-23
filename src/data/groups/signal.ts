import { HoshimachiSuiseiSignal } from "../talents/holo-jp-0-suisei";
import { Group } from "../types";

export const Signal: Group = {
  id: "signal",
  type: "GROUP",
  name: "S:gnal",
  startDate: new Date(Date.UTC(2018, 6)),
  endDate: new Date(Date.UTC(2018, 7, 4)),
  talents: [HoshimachiSuiseiSignal],
  groups: [],
  events: [],
  badgeColor: "bg-black hover:bg-gray-500",
  borderColor: "border-black",
};
