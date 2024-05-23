import { AzkiINNK } from "../talents/holo-jp-0-azki";
import { HoshimachiSuiseiINNK } from "../talents/holo-jp-0-suisei";
import { Group } from "../types";

export const INNK: Group = {
  id: "innk",
  type: "AGENCY",
  name: "INoNaKa (INNK)",
  startDate: new Date(Date.UTC(2019, 4, 19)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [AzkiINNK, HoshimachiSuiseiINNK],
  groups: [],
  events: [
    {
      id: "innk-azki-suisei-join",
      type: "OTHER",
      name: "AZKi & Hoshimachi Suisei Joined INoNaKa Music",
      description:
        'AZKi alongside Hoshimachi Suisei joined hololive under the "INoNaKa Music" label.',
      date: new Date(Date.UTC(2019, 4, 19)),
    },
  ],
  badgeColor: "bg-black hover:bg-gray-500",
  borderColor: "border-black",
};
