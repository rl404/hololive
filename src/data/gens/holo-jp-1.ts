import {
  AkiRosenthalHolo,
  AkiRosenthalHoloPro,
} from "../talents/holo-jp-1-aki";
import { HitomiChris } from "../talents/holo-jp-1-chris";
import {
  ShirakamiFubukiHolo,
  ShirakamiFubukiHoloPro,
} from "../talents/holo-jp-1-fubuki";
import { AkaiHaatoHolo, AkaiHaatoHoloPro } from "../talents/holo-jp-1-haato";
import {
  NatsuiroMatsuriHolo,
  NatsuiroMatsuriHoloPro,
} from "../talents/holo-jp-1-matsuri";
import { YozoraMelHolo, YozoraMelHoloPro } from "../talents/holo-jp-1-mel";
import { Group } from "../types";

export const HoloGen1: Group = {
  id: "holo-gen-1",
  type: "GEN",
  name: "1st Gen",
  startDate: new Date(Date.UTC(2018, 5, 1)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [
    ShirakamiFubukiHolo,
    AkiRosenthalHolo,
    NatsuiroMatsuriHolo,
    AkaiHaatoHolo,
    HitomiChris,
    YozoraMelHolo,
  ],
  groups: [],
  events: [],
};

export const HoloJPGen1: Group = {
  id: "holo-jp-gen-1",
  type: "GEN",
  name: "1st Gen",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [
    ShirakamiFubukiHoloPro,
    AkiRosenthalHoloPro,
    NatsuiroMatsuriHoloPro,
    AkaiHaatoHoloPro,
    YozoraMelHoloPro,
  ],
  groups: [],
  events: [],
};
