import { KiryuCoco } from "../talents/holo-jp-4-coco";
import { AmaneKanata } from "../talents/holo-jp-4-kanata";
import { HimemoriLuna } from "../talents/holo-jp-4-luna";
import { TokoyamiTowa } from "../talents/holo-jp-4-towa";
import { TsunomakiWatame } from "../talents/holo-jp-4-watame";
import { Group } from "../types";

export const HoloJPGen4: Group = {
  id: "holo-jp-gen-4",
  type: "GEN",
  name: "4th Gen: HoloForce",
  startDate: new Date(Date.UTC(2019, 11, 27)),
  talents: [AmaneKanata, KiryuCoco, TokoyamiTowa, HimemoriLuna, TsunomakiWatame],
  groups: [],
  events: [],
};
