import { AnyaMelfissa } from "../talents/holo-id-2-anya";
import { KureijiOllie } from "../talents/holo-id-2-ollie";
import { PavoliaReine } from "../talents/holo-id-2-reine";
import { Group } from "../types";

export const HoloIDGen2: Group = {
  id: "holo-id-gen-2",
  type: "GEN",
  name: "2nd Gen: Holoro",
  startDate: new Date(Date.UTC(2020, 11, 4)),
  talents: [KureijiOllie, AnyaMelfissa, PavoliaReine],
  groups: [],
  events: [],
};
