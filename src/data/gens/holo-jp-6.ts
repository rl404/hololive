import { SakamataChloe } from "../talents/holo-jp-6-chloe";
import { KazamaIroha } from "../talents/holo-jp-6-iroha";
import { HakuiKoyori } from "../talents/holo-jp-6-koyori";
import { LaplusDarknesss } from "../talents/holo-jp-6-laplus";
import { TakaneLui } from "../talents/holo-jp-6-lui";
import { Group } from "../types";

export const HoloJPGen6: Group = {
  id: "holo-jp-gen-6",
  type: "GEN",
  name: "6th Gen: Secret Society HoloX",
  startDate: new Date(Date.UTC(2021, 10, 26)),
  talents: [LaplusDarknesss, TakaneLui, HakuiKoyori, SakamataChloe, KazamaIroha],
  groups: [],
  events: [],
};
