import { TsukishitaKaoru } from "../talents/holostars-jp-3-kaoru";
import { AragamiOga } from "../talents/holostars-jp-3-oga";
import { KageyamaShien } from "../talents/holostars-jp-3-shien";
import { Group } from "../types";

export const HolostarsJPGen3: Group = {
  id: "holostars-jp-gen-3",
  type: "GEN",
  name: "3rd Gen: MaFia",
  startDate: new Date(Date.UTC(2020, 3, 29)),
  talents: [KageyamaShien, AragamiOga, TsukishitaKaoru],
  groups: [],
  events: [],
};
