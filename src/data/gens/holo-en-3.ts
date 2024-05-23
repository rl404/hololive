import { KosekiBijou } from "../talents/holo-en-3-bijou";
import { FuwawaAbyssgard } from "../talents/holo-en-3-fuwawa";
import { MococoAbyssgard } from "../talents/holo-en-3-mococo";
import { NerissaRavencroft } from "../talents/holo-en-3-nerissa";
import { ShioriNovella } from "../talents/holo-en-3-shiori";
import { Group } from "../types";

export const HoloENGen3: Group = {
  id: "holo-en-gen-1",
  type: "GEN",
  name: "3rd Gen: -Advent-",
  startDate: new Date(Date.UTC(2023, 6, 30)),
  talents: [KosekiBijou, NerissaRavencroft, ShioriNovella, FuwawaAbyssgard, MococoAbyssgard],
  groups: [],
  events: [],
};
