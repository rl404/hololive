import { HoloJPGen0 } from "../gens/holo-jp-0";
import { HoloJPGen1 } from "../gens/holo-jp-1";
import { HoloJPGen2 } from "../gens/holo-jp-2";
import { HoloJPGen3 } from "../gens/holo-jp-3";
import { HoloJPGen4 } from "../gens/holo-jp-4";
import { HoloJPGen5 } from "../gens/holo-jp-5";
import { HoloJPGen6 } from "../gens/holo-jp-6";
import { HoloJPGamers } from "../gens/holo-jp-gamers";
import { SakuraMikoHoloPro } from "../talents/holo-jp-0-miko";
import { RobocoHoloPro } from "../talents/holo-jp-0-roboco";
import { TokinoSoraHoloPro } from "../talents/holo-jp-0-sora";
import { HoshimachiSuiseiHoloPro } from "../talents/holo-jp-0-suisei";
import { Group } from "../types";

export const HoloJP: Group = {
  id: "holo-jp",
  type: "BRANCH",
  name: "Hololive Japan",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [
    TokinoSoraHoloPro,
    RobocoHoloPro,
    SakuraMikoHoloPro,
    HoshimachiSuiseiHoloPro,
  ],
  groups: [
    HoloJPGen0,
    HoloJPGen1,
    HoloJPGen2,
    HoloJPGamers,
    HoloJPGen3,
    HoloJPGen4,
    HoloJPGen5,
    HoloJPGen6,
  ],
  events: [],
};
