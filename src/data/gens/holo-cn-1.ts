import { CiviaHolo, CiviaHoloPro } from "../talents/holo-cn-1-civia";
import { SpadeEcho } from "../talents/holo-cn-1-echo";
import { YogiriHolo, YogiriHoloPro } from "../talents/holo-cn-1-yogiri";
import { Group } from "../types";

export const HoloCNGen1: Group = {
  id: "holo-cn-gen-1",
  type: "GEN",
  name: "1st Gen",
  startDate: new Date(Date.UTC(2019, 8, 27)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [YogiriHolo, CiviaHolo],
  groups: [],
  events: [],
};

export const HoloProCNGen1: Group = {
  id: "holopro-cn-gen-1",
  type: "GEN",
  name: "1st Gen",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: new Date(Date.UTC(2020, 11, 27)),
  talents: [YogiriHoloPro, CiviaHoloPro, SpadeEcho],
  groups: [],
  events: [],
};
