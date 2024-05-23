import { Talent } from "../types";

export const SakuraMiko: Talent = {
  id: "miko",
  name: "Sakura Miko",
  startDate: new Date(Date.UTC(2018, 7, 1)),
  birthdayDate: new Date(Date.UTC(0, 2, 5)),
  events: [],
  subscribers: [
    { subscriber: 1e3, date: new Date(Date.UTC(2018, 7, 27)) },
    { subscriber: 3.5e3, date: new Date(Date.UTC(2018, 11, 19)) },
    { subscriber: 5e3, date: new Date(Date.UTC(2018, 11, 26)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2019, 0, 24)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2019, 4, 12)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 6, 9)) },
    { subscriber: 7.4e4, date: new Date(Date.UTC(2019, 8, 21)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 11, 6)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 2, 16)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 5, 7)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 7, 3)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 9, 1)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 10, 7)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 11, 8)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 0, 15)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 1, 28)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 3, 30)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 9, 17)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2022, 6, 7)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2024, 3, 9)) },
    { subscriber: 2.03e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const SakuraMikoCover: Talent = {
  ...SakuraMiko,
  startDate: SakuraMiko.startDate,
  endDate: new Date(2018, 11, 25),
};

export const SakuraMikoHolo: Talent = {
  ...SakuraMiko,
  startDate: new Date(2018, 11, 25),
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const SakuraMikoHoloPro: Talent = {
  ...SakuraMiko,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: new Date(Date.UTC(2021, 7, 30)),
};

export const SakuraMiko0: Talent = {
  ...SakuraMiko,
  startDate: new Date(Date.UTC(2021, 7, 30)),
};
