import {
  ShirakamiFubukiHolo,
  ShirakamiFubukiHoloPro,
} from "../talents/holo-jp-1-fubuki";
import {
  InugamiKoroneHolo,
  InugamiKoroneHoloPro,
} from "../talents/holo-jp-gamers-korone";
import { OokamiMioHolo, OokamiMioHoloPro } from "../talents/holo-jp-gamers-mio";
import {
  NekomataOkayuHolo,
  NekomataOkayuHoloPro,
} from "../talents/holo-jp-gamers-okayu";
import { Group } from "../types";

export const HoloGamers: Group = {
  id: "holo-gamers",
  type: "GEN",
  name: "GAMERS",
  startDate: new Date(Date.UTC(2018, 11, 7)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [
    ShirakamiFubukiHolo,
    OokamiMioHolo,
    NekomataOkayuHolo,
    InugamiKoroneHolo,
  ],
  groups: [],
  events: [],
};

export const HoloJPGamers: Group = {
  id: "holo-jp-gamers",
  type: "GEN",
  name: "GAMERS",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [
    ShirakamiFubukiHoloPro,
    OokamiMioHoloPro,
    NekomataOkayuHoloPro,
    InugamiKoroneHoloPro,
  ],
  groups: [],
  events: [],
};
