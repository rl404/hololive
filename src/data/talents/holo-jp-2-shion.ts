import { Talent } from "../types";

export const MurasakiShion: Talent = {
  id: "shion",
  name: "Murasaki Shion",
  startDate: new Date(Date.UTC(2018, 7, 17)),
  birthdayDate: new Date(Date.UTC(0, 11, 8)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 9, 17)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2018, 11, 19)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 5, 8)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 9, 9)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 11, 31)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 2, 19)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 4, 6)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 4, 27)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 6, 17)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 8, 22)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 10, 23)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 0, 15)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 3, 18)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 6, 20)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 10, 2)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2022, 3, 10)) },
    { subscriber: 1.2e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const MurasakiShionHolo: Talent = {
  ...MurasakiShion,
  startDate: MurasakiShion.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const MurasakiShionHoloPro: Talent = {
  ...MurasakiShion,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
