import { AzkiHoloPro } from "../talents/holo-jp-0-azki";
import { SakuraMiko0 } from "../talents/holo-jp-0-miko";
import { Roboco0 } from "../talents/holo-jp-0-roboco";
import { TokinoSora0 } from "../talents/holo-jp-0-sora";
import { HoshimachiSuisei0 } from "../talents/holo-jp-0-suisei";
import { Group } from "../types";

export const HoloJPGen0: Group = {
  id: "holo-jp-gen-0",
  type: "GEN",
  name: "0th Gen",
  startDate: new Date(Date.UTC(2021, 7, 30)),
  talents: [TokinoSora0, Roboco0, SakuraMiko0, HoshimachiSuisei0, AzkiHoloPro],
  groups: [],
  events: [],
};
