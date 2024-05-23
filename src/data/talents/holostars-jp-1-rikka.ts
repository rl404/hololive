import { Talent } from "../types";

export const Rikka: Talent = {
  id: "rikka",
  name: "Rikka",
  startDate: new Date(Date.UTC(2019, 9, 20)),
  birthdayDate: new Date(Date.UTC(0, 3, 15)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 1, 16)) },
    { subscriber: 1.5e4, date: new Date(Date.UTC(2020, 3, 19)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2020, 4, 6)) },
    { subscriber: 3e4, date: new Date(Date.UTC(2020, 5, 4)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2020, 7, 13)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2020, 8, 20)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2020, 9, 25)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 0, 17)) },
    { subscriber: 1.1e5, date: new Date(Date.UTC(2021, 1, 10)) },
    { subscriber: 1.2e5, date: new Date(Date.UTC(2021, 2, 9)) },
    { subscriber: 1.3e5, date: new Date(Date.UTC(2021, 2, 29)) },
    { subscriber: 1.4e5, date: new Date(Date.UTC(2021, 3, 18)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2021, 4, 11)) },
    { subscriber: 1.6e5, date: new Date(Date.UTC(2021, 4, 25)) },
    { subscriber: 1.7e5, date: new Date(Date.UTC(2021, 5, 29)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 0, 28)) },
    { subscriber: 2.52e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};

export const RikkaHolo: Talent = {
  ...Rikka,
  startDate: Rikka.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const RikkaHoloPro: Talent = {
  ...Rikka,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
