import { AzkiINNKHolo } from "../talents/holo-jp-0-azki";
import { Group } from "../types";

export const INNK: Group = {
  id: "innk",
  type: "BRANCH",
  name: "INoNaKa (INNK)",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: new Date(Date.UTC(2022, 3, 1)),
  talents: [AzkiINNKHolo],
  groups: [],
  events: [],
  badgeColor: "bg-black hover:bg-gray-500",
  borderColor: "border-black",
};
