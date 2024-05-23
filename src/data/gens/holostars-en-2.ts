import { Goldbullet } from "../talents/holostars-en-2-goldbullet";
import { JurardTRexford } from "../talents/holostars-en-2-jurard";
import { Octavio } from "../talents/holostars-en-2-octavio";
import { CrimzonRuze } from "../talents/holostars-en-2-ruze";
import { Group } from "../types";

export const HolostarsENGen2: Group = {
  id: "holostars-en-gen-2",
  type: "GEN",
  name: "2nd Gen: -Armis-",
  startDate: new Date(Date.UTC(2023, 10, 18)),
  talents: [JurardTRexford, Goldbullet, Octavio, CrimzonRuze],
  groups: [],
  events: [],
};
