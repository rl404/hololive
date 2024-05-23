import { KaelaKovalskia } from "../talents/holo-id-3-kaela";
import { KoboKanaeru } from "../talents/holo-id-3-kobo";
import { VestiaZeta } from "../talents/holo-id-3-zeta";
import { Group } from "../types";

export const HoloIDGen3: Group = {
  id: "holo-id-gen-3",
  type: "GEN",
  name: "3rd Gen: Holo3ro",
  startDate: new Date(Date.UTC(2022, 2, 25)),
  talents: [VestiaZeta, KaelaKovalskia, KoboKanaeru],
  groups: [],
  events: [],
};
