import { Talent } from "../types";

export const YakushijiSuzaku: Talent = {
  id: "suzaku",
  name: "Yakushiji Suzaku",
  startDate: new Date(Date.UTC(2019, 8, 7)),
  endDate: new Date(Date.UTC(2020, 2, 6)),
  birthdayDate: new Date(Date.UTC(0, 2, 24)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2020, 1, 22)) },
    { subscriber: 1.02e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};

export const YakushijiSuzakuHolo: Talent = {
  ...YakushijiSuzaku,
  startDate: YakushijiSuzaku.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const YakushijiSuzakuHoloPro: Talent = {
  ...YakushijiSuzaku,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: YakushijiSuzaku.endDate,
};
