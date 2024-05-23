import { Talent } from "../types";

export const HanasakiMiyabi: Talent = {
  id: "miyabi",
  name: "Hanasaki Miyabi",
  startDate: new Date(Date.UTC(2019, 5, 8)),
  birthdayDate: new Date(Date.UTC(0, 2, 3)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2019, 11, 30)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 4, 3)) },
    { subscriber: 1.5e4, date: new Date(Date.UTC(2020, 6, 9)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2020, 7, 25)) },
    { subscriber: 3e4, date: new Date(Date.UTC(2020, 10, 2)) },
    { subscriber: 4e4, date: new Date(Date.UTC(2020, 11, 22)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2021, 0, 26)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2021, 2, 7)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2021, 3, 25)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2021, 6, 9)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 7, 22)) },
    { subscriber: 1.3e5, date: new Date(Date.UTC(2022, 8, 4)) },
    { subscriber: 1.47e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};

export const HanasakiMiyabiHolo: Talent = {
  ...HanasakiMiyabi,
  startDate: HanasakiMiyabi.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const HanasakiMiyabiHoloPro: Talent = {
  ...HanasakiMiyabi,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
