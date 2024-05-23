import { HolostarsGen1 } from "../gens/holostars-jp-1";
import { Group } from "../types";

export const Holostars: Group = {
  id: "holostars",
  type: "AGENCY",
  name: "HOLOSTARS",
  startDate: new Date(Date.UTC(2019, 5, 8)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [],
  groups: [HolostarsGen1],
  events: [
    {
      id: "holostars-jp-2nd-gen-announcement",
      type: "OTHER",
      name: "HOLOSTARS Japan 2nd Gen Announcement",
      description:
        "HOLOSTARS announced its second generation, which featured 3 new members, Astel Leda, Kishido Temma and Yukoku Roberu, who started their debuts on 7 December.",
      date: new Date(Date.UTC(2019, 10)),
    },
    {
      id: "holostars-jp-3rd-gen-announcement",
      type: "OTHER",
      name: "HOLOSTARS Japan 3rd Gen Announcement",
      description:
        'HOLOSTARS\' Twitter account released a trailer announcing its third generation[67] and a preview presentation of its 3 new members, naming them "TriNero".',
      date: new Date(Date.UTC(2020, 4, 3)),
    },
    {
      id: "holostars-official-reddit",
      type: "OTHER",
      name: "HOLOSTARS Official Reddit",
      description: "HOLOSTARS opened its official Reddit account.",
      date: new Date(Date.UTC(2022, 0, 19)),
    },
    {
      id: "holostars-jp-4th-gen-announcement",
      type: "OTHER",
      name: "HOLOSTARS Japan 4th Gen Announcement",
      description:
        'HOLOSTARS\' Twitter account announced its new unit of VTubers, named "UPROAR!!".',
      date: new Date(Date.UTC(2022, 2, 19)),
    },
    {
      id: "holostars-en-1st-gen-announcement",
      type: "OTHER",
      name: "HOLOSTARS English 1st Gen Announcement",
      description:
        'Hololive\'s Twitter account announced "HOLOSTARS English -TEMPUS-", consisting of 4 members Regis Altare, Magni Dezmond, Axel Syrios, and Noir Vesper. They debuted on 22 and 23 July 2023 (JST).',
      date: new Date(Date.UTC(2022, 6, 18)),
    },
    {
      id: "holostars-en-1st-gen-more-member",
      type: "OTHER",
      name: "HOLOSTARS TEMPUS More Members",
      description:
        "Hololive production English's Twitter account announced that TEMPUS would get four new members: Gavis Bettel, Machina X Flayon, Banzoin Hakka and Josuiji Shinri. All four members debuted on 7 January (PST) or 8 January (JST).",
      date: new Date(Date.UTC(2023, 0, 4)),
    },
    {
      id: "holostars-en-2nd-gen-announcement",
      type: "OTHER",
      name: "HOLOSTARS English 2nd Gen Announcement",
      description:
        'Hololive\'s Twitter account announced a new unit named "HOLOSTARS English -ARMIS-", consisting of Jurard T Rexford, Goldbullet, Octavio, and Crimzon Ruze, they would debut on two days 17 and 18 November PST (18 and 19 November JST).',
      date: new Date(Date.UTC(2023, 10, 16)),
    },
  ],
  badgeColor: "bg-purple-500 hover:bg-purple-400",
  borderColor: "border-purple-500",
};
