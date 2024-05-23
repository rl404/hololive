import { Talent } from "../types";

export const ShiranuiFlare: Talent = {
  id: "flare",
  name: "Shiranui Flare",
  startDate: new Date(Date.UTC(2019, 7, 7)),
  birthdayDate: new Date(Date.UTC(0, 3, 2)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2019, 7, 6)) },
    { subscriber: 1.3e4, date: new Date(Date.UTC(2019, 7, 10)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2019, 8, 1)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 11, 17)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2020, 0, 19)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 2, 13)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 4, 17)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 6, 2)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 7, 14)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 8, 23)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 11, 4)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 1, 7)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 3, 25)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 6, 11)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 10, 11)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2022, 6, 10)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2023, 5, 15)) },
    { subscriber: 1.08e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const ShiranuiFlareHolo: Talent = {
  ...ShiranuiFlare,
  startDate: ShiranuiFlare.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const ShiranuiFlareHoloPro: Talent = {
  ...ShiranuiFlare,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
