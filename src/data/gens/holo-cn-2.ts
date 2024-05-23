import { Rosalyn } from "../talents/holo-cn-2-artia";
import { Doris } from "../talents/holo-cn-2-doris";
import { Artia } from "../talents/holo-cn-2-rosalyn";
import { Group } from "../types";

export const HoloCNGen2: Group = {
  id: "holo-cn-gen-2",
  type: "GEN",
  name: "2nd Gen",
  startDate: new Date(Date.UTC(2020, 3, 3)),
  endDate: new Date(Date.UTC(2020, 11, 27)),
  talents: [Artia, Doris, Rosalyn],
  groups: [],
  events: [],
};
