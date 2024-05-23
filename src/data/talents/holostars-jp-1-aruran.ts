import { Talent } from "../types";

export const Arurandeisu: Talent = {
  id: "aruran",
  name: "Arurandeisu",
  startDate: new Date(Date.UTC(2019, 7, 8)),
  birthdayDate: new Date(Date.UTC(0, 10, 11)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2019, 11, 23)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 4, 2)) },
    { subscriber: 1.5e4, date: new Date(Date.UTC(2020, 5, 15)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2020, 6, 29)) },
    { subscriber: 3e4, date: new Date(Date.UTC(2020, 9, 3)) },
    { subscriber: 4e4, date: new Date(Date.UTC(2020, 10, 19)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2020, 10, 30)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2020, 11, 9)) },
    { subscriber: 6.5e4, date: new Date(Date.UTC(2020, 11, 30)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2021, 0, 15)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2021, 1, 17)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2021, 2, 20)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 4, 7)) },
    { subscriber: 1.1e5, date: new Date(Date.UTC(2021, 5, 20)) },
    { subscriber: 1.2e5, date: new Date(Date.UTC(2021, 6, 19)) },
    { subscriber: 1.3e5, date: new Date(Date.UTC(2021, 7, 28)) },
    { subscriber: 1.4e5, date: new Date(Date.UTC(2021, 9, 25)) },
    { subscriber: 1.7e5, date: new Date(Date.UTC(2022, 8, 6)) },
    { subscriber: 2.12e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};

export const ArurandeisuHolo: Talent = {
  ...Arurandeisu,
  startDate: Arurandeisu.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const ArurandeisuHoloPro: Talent = {
  ...Arurandeisu,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
