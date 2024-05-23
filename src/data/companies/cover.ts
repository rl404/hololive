import { Hololive } from "../agencies/hololive";
import { HoloPro } from "../agencies/holopro";
import { Holostars } from "../agencies/holostars";
import { INNK } from "../agencies/innk";
import { AzkiCover } from "../talents/holo-jp-0-azki";
import { SakuraMikoCover } from "../talents/holo-jp-0-miko";
import { RobocoCover } from "../talents/holo-jp-0-roboco";
import { TokinoSoraCover } from "../talents/holo-jp-0-sora";
import { YozoraMelCover } from "../talents/holo-jp-1-mel";
import { Group } from "../types";

export const CoverCorp: Group = {
  id: "cover",
  type: "COMPANY",
  name: "COVER Corporation",
  startDate: new Date(Date.UTC(2016, 5, 13)),
  talents: [
    TokinoSoraCover,
    RobocoCover,
    SakuraMikoCover,
    AzkiCover,
    YozoraMelCover,
  ],
  groups: [Hololive, INNK, Holostars, HoloPro],
  events: [
    {
      id: "cover-founded",
      type: "OTHER",
      name: "COVER Corporation Founded",
      description:
        "COVER corporation was founded by Motoaki Tanigo. Its focus is on the development of VR and AR applications/software and Virtual Youtubers.",
      date: new Date(Date.UTC(2016, 5, 13)),
    },
    {
      id: "cover-ping-pong-league-release",
      type: "OTHER",
      name: "Ping Pong League Release",
      description:
        "Cover Corp releases Ping Pong League on February 28th, a virtual reality table tennis game, on Steam.",
      date: new Date(Date.UTC(2017, 1, 28)),
    },
    {
      id: "cover-3d-showcase",
      type: "OTHER",
      name: "3D Capture Showcase",
      description:
        "COVER showcased a tech demo for the company's 3D capture digital avatar technology.",
      date: new Date(Date.UTC(2017, 2, 1)),
    },
    {
      id: "cover-first-broadcast",
      type: "DEBUT",
      name: "First Broadcast & Tokino Sora Debut",
      description:
        "Tokino Sora made the first COVER Corp VTuber broadcast on YouTube and Niconico Douga.",
      date: new Date(Date.UTC(2017, 8, 7)),
    },
    {
      id: "cover-app-release",
      type: "OTHER",
      name: "Hololive App Release",
      description: "COVER released an iOS and Android app named hololive.",
      date: new Date(Date.UTC(2017, 11, 21)),
    },
    {
      id: "cover-2nd-audition",
      type: "OTHER",
      name: "2nd Member Audition",
      description: "Auditions were opened looking for a second VTuber.",
      date: new Date(Date.UTC(2017, 11, 22)),
    },
    {
      id: "cover-sora-10k",
      type: "ACHIEVEMENT",
      name: "Tokina Sora 10,000 Youtube Subscribers",
      description:
        "Tokino Sora achieved a 10,000 YouTube subscribers milestone.",
      date: new Date(Date.UTC(2018, 11, 30)),
    },
    {
      id: "cover-roboco-debut",
      type: "DEBUT",
      name: "Roboco Debut",
      description:
        "Roboco-san made her debut as the second VTuber under COVER Corp.",
      date: new Date(Date.UTC(2018, 2, 4)),
    },
    {
      id: "cover-sora-100k",
      type: "ACHIEVEMENT",
      name: "Tokino Sora 100,000 Youtube Subscribers",
      description:
        "Tokino Sora achieved a 100,000 YouTube subscriber milestone.",
      date: new Date(Date.UTC(2018, 2, 9)),
    },
    {
      id: "cover-jp-gen-1-audition",
      type: "OTHER",
      name: "Hololive Japan 1st Generation Audition",
      description:
        "Auditions opened for what would become known as hololive 1st Generation. Five characters were unveiled in advance: Aki Rosenthal, Hitomi Chris, Shirakami Fubuki, Akai Haato, and Natsuiro Matsuri. A sixth first-generation member, Yozora Mel, made her debut on 13 May. The five other first-generation members were selected from the auditions and made their debuts between 1 June and 3 June. Their debuts formally marked the establishment of hololive as a VTuber agency, with Tokino Sora and Roboco-san also managed under it.",
      date: new Date(Date.UTC(2018, 3, 2)),
    },
    {
      id: "cover-miko-debut",
      type: "DEBUT",
      name: "Sakura Miko Debut",
      description: "Under COVER Corp's management Sakura Miko made her debut.",
      date: new Date(Date.UTC(2018, 7, 1)),
    },
    {
      id: "cover-azki-debut",
      type: "DEBUT",
      name: "AZKi Debut",
      description: "Under COVER Corp's management AZKi made her debut.",
      date: new Date(Date.UTC(2018, 10, 15)),
    },
    {
      id: "cover-miko-to-hololive",
      type: "OTHER",
      name: "Sakura Miko Transferred to Hololive",
      description: "Sakura Miko Transferred to Hololive",
      date: new Date(Date.UTC(2018, 11, 25)),
    },
  ],
  badgeColor: "bg-blue-500 hover:bg-blue-400",
  borderColor: "border-blue-500",
};
