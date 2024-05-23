import { Talent } from "../types";

export const YukihanaLamy: Talent = {
  id: "lamy",
  name: "Yukihana Lamy",
  startDate: new Date(Date.UTC(2020, 7, 12)),
  birthdayDate: new Date(Date.UTC(0, 10, 15)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 7, 12)) },
    { subscriber: 1.25e5, date: new Date(Date.UTC(2020, 7, 13)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 7, 14)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 7, 19)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 9, 3)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 11, 8)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 0, 5)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 3, 1)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 5, 12)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 8, 1)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 11, 27)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2022, 4, 21)) },
    { subscriber: 1.23e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
