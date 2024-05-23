import { HakosBaelzCouncil, HakosBaelzPromise } from "../talents/holo-en-2-bae";
import { CeresFaunaCouncil, CeresFaunaPromise } from "../talents/holo-en-2-fauna";
import { OuroKroniiCouncil, OuroKroniiPromise } from "../talents/holo-en-2-kronii";
import { NanashiMumeiCouncil, NanashiMumeiPromise } from "../talents/holo-en-2-mumei";
import { TsukumoSana } from "../talents/holo-en-2-sana";
import { IrysPromise } from "../talents/holo-en-hope-irys";
import { Group } from "../types";

export const HoloENGen2Council: Group = {
  id: "holo-en-gen-2-council",
  type: "GEN",
  name: "2nd Gen: -Council-",
  startDate: new Date(Date.UTC(2021, 7, 23)),
  endDate: new Date(Date.UTC(2023, 9, 9)),
  talents: [CeresFaunaCouncil, OuroKroniiCouncil, NanashiMumeiCouncil, HakosBaelzCouncil, TsukumoSana],
  groups: [],
  events: [],
};

export const HoloENGen2Promise: Group = {
  id: "holo-en-gen-2-promise",
  type: "GEN",
  name: "2nd Gen: -Promise-",
  startDate: new Date(Date.UTC(2023, 9, 9)),
  talents: [CeresFaunaPromise, OuroKroniiPromise, NanashiMumeiPromise, HakosBaelzPromise, IrysPromise],
  groups: [],
  events: [],
};
