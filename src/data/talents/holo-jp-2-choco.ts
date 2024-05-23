import { Talent } from "../types";

export const YuzukiChoco: Talent = {
  id: "choco",
  name: "Yuzuki Choco",
  startDate: new Date(Date.UTC(2018, 8, 5)),
  birthdayDate: new Date(Date.UTC(0, 1, 14)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 9, 20)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2018, 11, 7)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 0, 14)) },
    { subscriber: 7.5e4, date: new Date(Date.UTC(2019, 1, 28)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 3, 30)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 2, 27)) },
    { subscriber: 2.6e5, date: new Date(Date.UTC(2020, 5, 26)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 7, 8)) },
    { subscriber: 3.5e5, date: new Date(Date.UTC(2020, 8, 1)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 10, 13)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 0, 26)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 4, 4)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 6, 31)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2022, 0, 7)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2022, 8, 3)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2023, 8, 6)) },
    { subscriber: 1.04e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const YuzukiChocoHolo: Talent = {
  ...YuzukiChoco,
  startDate: YuzukiChoco.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const YuzukiChocoHoloPro: Talent = {
  ...YuzukiChoco,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
