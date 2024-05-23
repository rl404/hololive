import { AiraniIofifteen } from "../talents/holo-id-1-iofi";
import { MoonaHoshinova } from "../talents/holo-id-1-moona";
import { AyundaRisu } from "../talents/holo-id-1-risu";
import { Group } from "../types";

export const HoloIDGen1: Group = {
  id: "holo-id-gen-1",
  type: "GEN",
  name: "1st Gen: AREA15",
  startDate: new Date(Date.UTC(2020, 3, 10)),
  talents: [AyundaRisu, MoonaHoshinova, AiraniIofifteen],
  groups: [],
  events: [],
};
