import { HoloCN } from "../branches/holo-cn";
import { HoloGen1 } from "../gens/holo-jp-1";
import { HoloGen2 } from "../gens/holo-jp-2";
import { HoloGen3 } from "../gens/holo-jp-3";
import { HoloGamers } from "../gens/holo-jp-gamers";
import { SakuraMikoHolo } from "../talents/holo-jp-0-miko";
import { RobocoHolo } from "../talents/holo-jp-0-roboco";
import { TokinoSoraHolo } from "../talents/holo-jp-0-sora";
import { HoshimachiSuiseiHolo } from "../talents/holo-jp-0-suisei";
import { Group } from "../types";

export const Hololive: Group = {
  id: "hololive",
  type: "AGENCY",
  name: "Hololive",
  startDate: new Date(Date.UTC(2018, 5, 1)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [TokinoSoraHolo, RobocoHolo, SakuraMikoHolo, HoshimachiSuiseiHolo],
  groups: [HoloGen1, HoloGen2, HoloGamers, HoloGen3, HoloCN],
  events: [
    {
      id: "hololive-jp-1st-gen-debut",
      type: "DEBUT",
      name: "Hololive Japan 1st Generation Debut",
      description:
        "The first-generation members made their debuts and their debuts formally marked the establishment of hololive as a VTuber agency.",
      date: new Date(Date.UTC(2018, 5)),
    },
    {
      id: "hololive-jp-2nd-gen-debut",
      type: "DEBUT",
      name: "Hololive Japan 2nd Generation Debut",
      description:
        "Throughout August and September, the second generation of hololive members made their debuts: Minato Aqua on 8 August, Murasaki Shion on 17 August, Nakiri Ayame on 3 September, Yuzuki Choco on 5 September, and Oozora Subaru on 17 September.",
      date: new Date(Date.UTC(2018, 7)),
    },
    {
      id: "hololive-gamers-debut",
      type: "DEBUT",
      name: "GAMERS Debut",
      description:
        "Hololive GAMERS was announced. The following day, Ookami Mio held her debut stream with Shirakami Fubuki, who was also considered a member of hololive GAMERS.",
      date: new Date(Date.UTC(2018, 11, 6)),
    },
    {
      id: "hololive-okayu-korone-gamers-debut",
      type: "DEBUT",
      name: "Nekomata Okayu & Inugami Korone GAMERS Debut",
      description:
        "Fubuki announced the addition of Nekomata Okayu and Inugami Korone to GAMERS. Okayu made her debut on 6 April. Korone appeared on Oozora Subaru's channel on 7 April but made her official debut on 13 April.",
      date: new Date(Date.UTC(2019, 2, 22)),
    },
    {
      id: "hololive-holo-no-graffiti-aired",
      type: "OTHER",
      name: "Holo no Graffiti Aired",
      description: "Holo no Graffiti aired its first episode.",
      date: new Date(Date.UTC(2019, 4, 5)),
    },
    {
      id: "hololive-jp-3rd-gen-audition",
      type: "OTHER",
      name: "Hololive Japan 3rd Generation Audition",
      description:
        "Hololive announced the start of the audition for three (at the time unnamed) members of the third generation, called hololive Fantasy (ホロライブファンタジー). The audition started from 13 June until 23 June, with the screening starting and ending a day later and the interviews being held from 14 June until 28 June. On 1 August, through a press release, the names for the remaining three members of the third generation (which were selected from auditions) were revealed: Houshou Marine, Shiranui Flare, and Shirogane Noel. On the same day, all three started their activities on Twitter.",
      date: new Date(Date.UTC(2019, 5, 13)),
    },
    {
      id: "hololive-yogiri-debut",
      type: "DEBUT",
      name: "Yogiri Debut",
      description:
        "Yogiri was announced as the first member of hololive China.",
      date: new Date(Date.UTC(2019, 7, 27)),
    },
    {
      id: "hololive-civia-spade-debut",
      type: "DEBUT",
      name: "Civia & Spade Echo Debut",
      description:
        "The second and third members of hololive China, Civia and Spade Echo were revealed.",
      date: new Date(Date.UTC(2019, 9, 25)),
    },
    {
      id: "hololive-suisei-to-hololive",
      type: "OTHER",
      name: "Hoshimachi Suisei Transferred to Hololive",
      description:
        "Hoshimachi Suisei announced that she would be transferred to hololive's main branch. She was transferred on 1 December.",
      date: new Date(Date.UTC(2019, 11, 1)),
    },
    {
      id: "hololive-holostar-innk-merge",
      type: "OTHER",
      name: "Merging of HOLOSTARS and INNK Music",
      description:
        "COVER Corp announced the merging of hololive's HOLOSTARS' and INNK Music's operations under the newly established \"hololive production\".",
      date: new Date(Date.UTC(2019, 11, 2)),
    },
  ],
  badgeColor: "bg-sky-400 hover:bg-sky-300",
  borderColor: "border-sky-400",
};
