import { ArurandeisuHolo, ArurandeisuHoloPro } from "../talents/holostars-jp-1-aruran";
import { KanadeIzuruHolo, KanadeIzuruHoloPro } from "../talents/holostars-jp-1-izuru";
import { KagamiKiraHolo, KagamiKiraHoloPro } from "../talents/holostars-jp-1-kira";
import { HanasakiMiyabiHolo, HanasakiMiyabiHoloPro } from "../talents/holostars-jp-1-miyabi";
import { RikkaHolo, RikkaHoloPro } from "../talents/holostars-jp-1-rikka";
import { YakushijiSuzakuHolo, YakushijiSuzakuHoloPro } from "../talents/holostars-jp-1-suzaki";
import { Group } from "../types";

export const HolostarsGen1: Group = {
  id: "holostars-gen-1",
  type: "GEN",
  name: "1st Gen",
  startDate: new Date(Date.UTC(2019, 5, 8)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [HanasakiMiyabiHolo, KagamiKiraHolo, KanadeIzuruHolo, YakushijiSuzakuHolo, ArurandeisuHolo, RikkaHolo],
  groups: [],
  events: [],
};

export const HolostarsJPGen1: Group = {
  id: "holostars-jp-gen-1",
  type: "GEN",
  name: "1st Gen",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [
    HanasakiMiyabiHoloPro,
    KagamiKiraHoloPro,
    KanadeIzuruHoloPro,
    YakushijiSuzakuHoloPro,
    ArurandeisuHoloPro,
    RikkaHoloPro,
  ],
  groups: [],
  events: [],
};
