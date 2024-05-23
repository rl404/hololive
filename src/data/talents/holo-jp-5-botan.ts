import { Talent } from "../types";

export const ShishiroBotan: Talent = {
  id: "botan",
  name: "Shishiro Botan",
  startDate: new Date(Date.UTC(2020, 7, 14)),
  birthdayDate: new Date(Date.UTC(0, 8, 8)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 7, 14)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 7, 18)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 8, 11)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 9, 31)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 11, 12)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 0, 16)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 2, 3)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 4, 23)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 6, 29)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 9, 16)) },
    { subscriber: 1.43e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
