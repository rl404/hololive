import { Talent } from "../types";

export const PavoliaReine: Talent = {
  id: "reine",
  name: "Pavolia Reine",
  startDate: new Date(Date.UTC(2020, 11, 6)),
  birthdayDate: new Date(Date.UTC(0, 8, 9)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 11, 6)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 11, 30)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2021, 0, 31)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 1, 28)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 5, 12)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 10, 5)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 3, 29)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 8, 17)) },
    { subscriber: 7.94e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-orange-500",
};
