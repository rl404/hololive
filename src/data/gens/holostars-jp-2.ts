import { AstelLeda } from "../talents/holostars-jp-2-astel";
import { YukokuRoberu } from "../talents/holostars-jp-2-roberu";
import { KishidoTemma } from "../talents/holostars-jp-2-temma";
import { Group } from "../types";

export const HolostarsJPGen2: Group = {
  id: "holostars-jp-gen-2",
  type: "GEN",
  name: "2nd Gen: SunTempo",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [AstelLeda, KishidoTemma, YukokuRoberu],
  groups: [],
  events: [],
};
