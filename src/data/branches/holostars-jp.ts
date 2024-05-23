import { HolostarsJPGen1 } from "../gens/holostars-jp-1";
import { HolostarsJPGen2 } from "../gens/holostars-jp-2";
import { HolostarsJPGen3 } from "../gens/holostars-jp-3";
import { HolostarsJPGen4 } from "../gens/holostars-jp-4";
import { Group } from "../types";

export const HolostarsJP: Group = {
  id: "holostars-jp",
  type: "BRANCH",
  name: "HOLOSTARS Japan",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [],
  groups: [HolostarsJPGen1, HolostarsJPGen2, HolostarsJPGen3, HolostarsJPGen4],
  events: [],
};
