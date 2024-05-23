import { HiodoshiAo } from "../talents/holo-dev_is-1-ao";
import { TodorokiHajime } from "../talents/holo-dev_is-1-hajime";
import { OtonoseKanade } from "../talents/holo-dev_is-1-kanade";
import { JuufuuteiRaden } from "../talents/holo-dev_is-1-raden";
import { IchijouRirika } from "../talents/holo-dev_is-1-ririka";
import { Group } from "../types";

export const HoloDevIsGen1: Group = {
  id: "holo-dev_is-gen-1",
  type: "GEN",
  name: "ReGLOSS",
  startDate: new Date(Date.UTC(2023, 8, 8)),
  talents: [HiodoshiAo, OtonoseKanade, IchijouRirika, JuufuuteiRaden, TodorokiHajime],
  groups: [],
  events: [],
};
