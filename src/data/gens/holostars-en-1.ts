import { AxelSyrios } from "../talents/holostars-en-1-axel";
import { GavisBettel } from "../talents/holostars-en-1-bettel";
import { MachinaXFlayon } from "../talents/holostars-en-1-flayon";
import { BanzoinHakka } from "../talents/holostars-en-1-hakka";
import { MagniDezmond } from "../talents/holostars-en-1-magni";
import { RegisAltare } from "../talents/holostars-en-1-regis";
import { JosuijiShinri } from "../talents/holostars-en-1-shinri";
import { NoirVesper } from "../talents/holostars-en-1-vesper";
import { Group } from "../types";

export const HolostarsENGen1: Group = {
  id: "holostars-en-gen-1",
  type: "GEN",
  name: "1st Gen: -Tempus-",
  startDate: new Date(Date.UTC(2022, 6, 22)),
  talents: [
    RegisAltare,
    AxelSyrios,
    GavisBettel,
    MachinaXFlayon,
    BanzoinHakka,
    JosuijiShinri,
    MagniDezmond,
    NoirVesper,
  ],
  groups: [],
  events: [],
};
