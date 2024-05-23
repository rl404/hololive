import { ShiranuiFlareHolo, ShiranuiFlareHoloPro } from "../talents/holo-jp-3-flare";
import { HoushouMarineHolo, HoushouMarineHoloPro } from "../talents/holo-jp-3-marine";
import { ShiroganeNoelHolo, ShiroganeNoelHoloPro } from "../talents/holo-jp-3-noel";
import { UsadaPekoraHolo, UsadaPekoraHoloPro } from "../talents/holo-jp-3-pekora";
import { UruhaRushiaHolo, UruhaRushiaHoloPro } from "../talents/holo-jp-3-rushia";
import { Group } from "../types";

export const HoloGen3: Group = {
  id: "holo-gen-3",
  type: "GEN",
  name: "3rd Gen: Fantasy",
  startDate: new Date(Date.UTC(2019, 6, 17)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [UsadaPekoraHolo, ShiranuiFlareHolo, ShiroganeNoelHolo, HoushouMarineHolo, UruhaRushiaHolo],
  groups: [],
  events: [],
};

export const HoloJPGen3: Group = {
  id: "holo-jp-gen-3",
  type: "GEN",
  name: "3rd Gen: Fantasy",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [UsadaPekoraHoloPro, ShiranuiFlareHoloPro, ShiroganeNoelHoloPro, HoushouMarineHoloPro, UruhaRushiaHoloPro],
  groups: [],
  events: [],
};
