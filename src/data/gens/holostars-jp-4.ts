import { YatogamiFuma } from "../talents/holostars-jp-4-fuma";
import { HizakiGamma } from "../talents/holostars-jp-4-gamma";
import { MinaseRio } from "../talents/holostars-jp-4-rio";
import { UtsugiUyu } from "../talents/holostars-jp-4-uyu";
import { Group } from "../types";

export const HolostarsJPGen4: Group = {
  id: "holostars-jp-gen-4",
  type: "GEN",
  name: "4th Gen: UPROAR!!",
  startDate: new Date(Date.UTC(2022, 2, 29)),
  talents: [YatogamiFuma, UtsugiUyu, HizakiGamma, MinaseRio],
  groups: [],
  events: [],
};
