import { Hololive } from "../groups/hololive";
import { Holostars } from "../groups/holostars";
import { Group } from "../types";

export const HoloPro: Group = {
  id: "holopro",
  type: "AGENCY",
  name: "Hololive Production",
  startDate: new Date(Date.UTC(2019, 11, 2)),
  talents: [],
  groups: [Hololive, Holostars],
  events: [
    {
      id: "holopro-jp-4th-gen-announcement",
      type: "OTHER",
      name: "Hololive Japan 4th Generation Announced",
      description:
        "Hololive fourth generation was announced, and three of its members, namely Kiryu Coco, Amane Kanata and Tsunomaki Watame, started their activities on Twitter.",
      date: new Date(Date.UTC(2019, 11, 25)),
    },
    {
      id: "holopro-cn-2nd-gen-announced",
      type: "OTHER",
      name: "Hololive China 2nd Generation Announced",
      description: "The second generation for hololive China was announced.",
      date: new Date(Date.UTC(2020, 2, 6)),
    },
    {
      id: "holopro-official-subreddit",
      type: "OTHER",
      name: "Takeover Unofficial Subreddit",
      description:
        "COVER Corp announced the takeover of the previously unofficial subreddit r/Hololive's operation, with Artia and Kiryu Coco becoming the first two official moderators of the subreddit on 3 and 23 April, respectively.",
      date: new Date(Date.UTC(2020, 3, 1)),
    },
    {
      id: "holopro-id-1st-gen-announcement",
      type: "OTHER",
      name: "Hololive Indonesia 1st Gen Announced",
      description: "The first generation of hololive Indonesia was announced.",
      date: new Date(Date.UTC(2020, 3, 6)),
    },
    {
      id: "holopro-en-1st-gen-audition",
      type: "OTHER",
      name: "Hololive English 1st Gen Audition",
      description:
        "Hololive English's Twitter account announced the beginning of auditions for English speaking VTubers and that their official site would support said language.",
      date: new Date(Date.UTC(2020, 3, 23)),
    },
    {
      id: "holopro-id-2nd-gen-audition",
      type: "OTHER",
      name: "Hololive Indonesia 2nd Gen Audition",
      description:
        "Hololive Indonesia's Twitter account announced auditions for its second generation, from 3 July to 19 July.",
      date: new Date(Date.UTC(2020, 6, 3)),
    },
    {
      id: "holopro-jp-5th-gen-debut",
      type: "DEBUT",
      name: "Hololive Japan 5th Gen Debut",
      description:
        "Hololive's Twitter account announced the introduction of its fifth generation, consisting of 5 members Yukihana Lamy, Momosuzu Nene, Shishiro Botan, Mano Aloe, and Omaru Polka, none of whom were members open for audition during March. They also started their activities on Twitter. They debuted from 12 to 16 August 2020 (JST time).",
      date: new Date(Date.UTC(2020, 7, 6)),
    },
    {
      id: "holopro-en-1st-gen-debut",
      type: "DEBUT",
      name: "Hololive English 1st Gen Debut",
      description:
        "The first promotional video for a new hololive branch, hololive English, was released on a new hololive English channel created to promote their content. The members, namely Mori Calliope, Takanashi Kiara, Ninomae Ina'nis, Gawr Gura and Watson Amelia, made their Twitter debut at the same time. They debuted from 12 to 13 September 2020 (JST).",
      date: new Date(Date.UTC(2020, 7, 8)),
    },
    {
      id: "holopro-gura-most-subscribed",
      type: "ACHIEVEMENT",
      name: "Gawr Gura Became the Most Subscribed Member",
      description:
        "Gawr Gura became the most subscribed hololive member, surpassing both Shirakami Fubuki and Inugami Korone.",
      date: new Date(Date.UTC(2020, 9, 20)),
    },
    {
      id: "holopro-first-1m-subscribers",
      type: "ACHIEVEMENT",
      name: "Gawr Gura Reached 1M Subscribers",
      description:
        "Gura became the first hololive member to reach 1,000,000 subscribers, the third VTuber overall after Kizuna AI and Kaguya Luna.",
      date: new Date(Date.UTC(2020, 9, 22)),
    },
    {
      id: "holopro-jp-end-bilibili",
      type: "OTHER",
      name: "Hololive Japan Stopped on Bilibili",
      description:
        "Hololive's Japanese branch ceased its activities on bilibili.",
      date: new Date(Date.UTC(2020, 9, 31)),
    },
    {
      id: "holopro-en-vsinger-audition",
      type: "OTHER",
      name: "Hololive English VSinger Audition",
      description:
        "Hololive English's Twitter account announced the start of auditions for VSingers for hololive English. Auditions were open until 29 January.",
      date: new Date(Date.UTC(2020, 10, 30)),
    },
    {
      id: "holopro-id-2nd-gen-debut",
      type: "DEBUT",
      name: "Hololive Indonesia 2nd Gen Debut",
      description:
        "Hololive Indonesia's Twitter account announced the debut dates of its second-generation members, consisting of 3 members Kureiji Ollie, Anya Melfissa, and Pavolia Reine. They debuted from 4 to 6 December 2020 (JST).",
      date: new Date(Date.UTC(2020, 11, 1)),
    },
    {
      id: "holopro-cn-end",
      type: "OTHER",
      name: "Hololive China Ended",
      description:
        "With the retirement of Rosalyn, hololive China officially ended its activities.",
      date: new Date(Date.UTC(2020, 11, 27)),
    },
    {
      id: "holopro-en-2nd-gen-audition",
      type: "OTHER",
      name: "Hoolive English 2nd Gen Audition",
      description:
        "Hololive English's Twitter account announced the audition for its second generation, with the audition going from 12 February to 26 March.",
      date: new Date(Date.UTC(2021, 1, 12)),
    },
    {
      id: "holopro-1st-gen-1m-subscribers",
      type: "ACHIEVEMENT",
      name: "1st Gen with All 1M Subscribers",
      description:
        "Takanashi Kiara reached 1,000,000 subscribers, making -Myth- the first generation where every member has reached 1 million subscribers.",
      date: new Date(Date.UTC(2021, 4, 30)),
    },
    {
      id: "holopro-most-subscribed-vtuber",
      type: "ACHIEVEMENT",
      name: "Most Subscribed Vtuber",
      description:
        "Gawr Gura's subscriber count on YouTube officially passed that of Kizuna AI's, making Gura the most subscribed VTuber in any streaming platform in the world.",
      date: new Date(Date.UTC(2021, 5, 30)),
    },
    {
      id: "holopro-en-vsinger-debut",
      type: "DEBUT",
      name: "First VSinger Debut",
      description:
        "Hololive English's channel teased its first VSinger, IRyS during a small introductory video. She debuted on 11 July.",
      date: new Date(Date.UTC(2021, 6, 6)),
    },
    {
      id: "holopro-en-2nd-gen-debut",
      type: "DEBUT",
      name: "Hololive English 2nd Gen Debut",
      description:
        "Hololive English's channel posted the third short trailer titled Council, formally revealing the name of hololive English's second generation, namely Tsukumo Sana, Ceres Fauna, Ouro Kronii, Nanashi Mumei and Hakos Baelz. They officially began their YouTube activities on 23 August JST.",
      date: new Date(Date.UTC(2021, 7, 16)),
    },
    {
      id: "holopro-id-3rd-gen-audition",
      type: "OTHER",
      name: "Hololive Indonesia 3rd Gen Audition",
      description:
        "Hololive Indonesia's Twitter account announced auditions for its third generation, from 25 August to 20 September.",
      date: new Date(Date.UTC(2021, 7, 25)),
    },
    {
      id: "holopro-jp-6th-gen-debut",
      type: "DEBUT",
      name: "Hololive Japan 6th Gen Debut",
      description:
        'Hololive\'s Twitter account announced the sixth generation of the Japanese branch known as "Secret Society holoX." Those members are: La+ Darknesss, Takane Lui, Hakui Koyori, Sakamata Chloe and Kazama Iroha. They debuted from 26 to 30 November 2021 (JST).',
      date: new Date(Date.UTC(2021, 10, 26)),
    },
    {
      id: "holopro-id-3rd-gen-debut",
      type: "DEBUT",
      name: "Hololive Indonesia 3rd Gen Debut",
      description:
        "Hololive Indonesia's third generation was announced, consisting of 3 members Vestia Zeta, Kaela Kovalskia, and Kobo Kanaeru. They debuted from 25 to 27 March 2022 (JST).",
      date: new Date(Date.UTC(2022, 2, 24)),
    },
    {
      id: "holopro-azki-transferred",
      type: "OTHER",
      name: "AZKi Transferred to Hololive",
      description: "AZKi was transferred to the main hololive branch.",
      date: new Date(Date.UTC(2022, 3, 1)),
    },
    {
      id: "holopro-live2d-3.0",
      type: "OTHER",
      name: "Hololive Live2D 3.0",
      description:
        "hololive's Twitter account announced \"hololive Live2D 3.0,\" an update to the talent's model, using the members of the first generation to show the new features, like Matsuri playing with a mouse and a keyboard, and Haato holding a controller, both with their model hands. Mel, Fubuki and Aki were shown with angry and sad expressions.",
      date: new Date(Date.UTC(2022, 3, 12)),
    },
    {
      id: "holopro-meet-project",
      type: "OTHER",
      name: "Hololive Meet Project",
      description:
        'hololive announced the international project "hololive Meet," starting from 26 April 2022. With the participation of every female branch under the VTuber agency with the goal of accelerating the expansion of hololive production to the global market. Accordingly, Tokino Sora from hololive, Ayunda Risu from hololive Indonesia, and Gawr Gura from hololive English were selected as ambassadors for the project.',
      date: new Date(Date.UTC(2022, 3, 26)),
    },
    {
      id: "holopro-id-4th-gen-audition",
      type: "OTHER",
      name: "Hololive Indonesia 4th Gen Audition",
      description:
        "Hololive Indonesia's Twitter account announced auditions for its fourth generation, from 1 February until 28 February.",
      date: new Date(Date.UTC(2023, 1, 1)),
    },
    {
      id: "holopro-youtube-membership",
      type: "OTHER",
      name: "Hololive YouTube Membership",
      description:
        "Hololive's main YouTube channel opened its membership feature.",
      date: new Date(Date.UTC(2023, 1, 28)),
    },
    {
      id: "holopro-2m-subscribers",
      type: "ACHIEVEMENT",
      name: "Hololive YouTube 2M Subscribers",
      description:
        "Hololive's main YouTube channel reached 2,000,000 subscribers.",
      date: new Date(Date.UTC(2023, 2, 19)),
    },
    {
      id: "holopro-holo-n",
      type: "OTHER",
      name: "Holo-n Music Label",
      description:
        'Hololive\'s Twitter account announced the creation of the music label "holo-n" in with Universal Music. Blue Journey was revealed as the first project of this joint label.',
      date: new Date(Date.UTC(2023, 6, 8)),
    },
    {
      id: "holopro-en-3rd-gen-debut",
      type: "DEBUT",
      name: "Hololive English 3rd Gen Debut",
      description:
        "A video was subsequently scheduled on the hololive English channel at that time, titled 【#holoAdvent】WANTED!【hololive English】. The video announced a new generation of hololive EN, featuring five members: Shiori Novella, Koseki Bijou, Nerissa Ravencroft, Fuwawa Abyssgard and Mococo Abyssgard.",
      date: new Date(Date.UTC(2023, 6, 25)),
    },
    {
      id: "holopro-dev_is-1st-gen-debut",
      type: "DEBUT",
      name: "Hololive ReGLOSS Debut",
      description:
        'hololive DEV_IS was finally revealed as a new branch of hololive production, led by the announcement of a new group called ReGLOSS made up of five members including: Hiodoshi Ao, Otonose Kanade, Ichijou Ririka, Juufuutei Raden, and Todoroki Hajime. The channel would also premiere the MV of ReGLOSS\' debut song, titled "Shunkan Heartbeat", making them the first hololive group to reveal their song before debut. ReGLOSS is scheduled to debut on the 9 and 10 September.',
      date: new Date(Date.UTC(2023, 8, 4)),
    },
    {
      id: "holopro-rebrand-promise",
      type: "OTHER",
      name: "Hololive English -Promise- Rebrand",
      description:
        'IRyS, Ceres Fauna, Ouro Kronii, Nanashi Mumei and Hakos Baelz announced that they would form the new unit "hololive English -Promise-".',
      date: new Date(Date.UTC(2023, 9, 9)),
    },
  ],
  badgeColor: "bg-sky-400 hover:bg-sky-300",
  borderColor: "border-sky-400",
};
