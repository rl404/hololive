import { WatsonAmelia } from "../talents/holo-en-1-ame";
import { MoriCalliope } from "../talents/holo-en-1-calli";
import { GawrGura } from "../talents/holo-en-1-gura";
import { NinomaeInanis } from "../talents/holo-en-1-ina";
import { TakanashiKiara } from "../talents/holo-en-1-kiara";
import { Group } from "../types";

export const HoloENGen1: Group = {
  id: "holo-en-gen-1",
  type: "GEN",
  name: "1st Gen: -Myth-",
  startDate: new Date(Date.UTC(2020, 8, 12)),
  talents: [MoriCalliope, TakanashiKiara, GawrGura, NinomaeInanis, WatsonAmelia],
  groups: [],
  events: [],
};
