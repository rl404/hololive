import { MinatoAquaHolo, MinatoAquaHoloPro } from "../talents/holo-jp-2-aqua";
import { NakiriAyameHolo, NakiriAyameHoloPro } from "../talents/holo-jp-2-ayame";
import { YuzukiChocoHolo, YuzukiChocoHoloPro } from "../talents/holo-jp-2-choco";
import { MurasakiShionHolo, MurasakiShionHoloPro } from "../talents/holo-jp-2-shion";
import { OozoraSubaruHolo, OozoraSubaruHoloPro } from "../talents/holo-jp-2-subaru";
import { Group } from "../types";

export const HoloGen2: Group = {
  id: "holo-gen-2",
  type: "GEN",
  name: "2nd Gen",
  startDate: new Date(Date.UTC(2018, 7, 8)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [MinatoAquaHolo, MurasakiShionHolo, NakiriAyameHolo, YuzukiChocoHolo, OozoraSubaruHolo],
  groups: [],
  events: [],
};

export const HoloJPGen2: Group = {
  id: "holo-jp-gen-2",
  type: "GEN",
  name: "2nd Gen",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [MinatoAquaHoloPro, MurasakiShionHoloPro, NakiriAyameHoloPro, YuzukiChocoHoloPro, OozoraSubaruHoloPro],
  groups: [],
  events: [],
};
