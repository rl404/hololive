import { ManoAloe } from "../talents/holo-jp-5-aloe";
import { ShishiroBotan } from "../talents/holo-jp-5-botan";
import { YukihanaLamy } from "../talents/holo-jp-5-lamy";
import { MomosuzuNene } from "../talents/holo-jp-5-nene";
import { OmaruPolka } from "../talents/holo-jp-5-polka";
import { Group } from "../types";

export const HoloJPGen5: Group = {
  id: "holo-jp-gen-5",
  type: "GEN",
  name: "5th Gen: NePoLaBo",
  startDate: new Date(Date.UTC(2020, 7, 12)),
  talents: [MomosuzuNene, OmaruPolka, YukihanaLamy, ShishiroBotan, ManoAloe],
  groups: [],
  events: [],
};
