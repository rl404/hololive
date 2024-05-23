import { Talent } from "../types";

export const KishidoTemma: Talent = {
  id: "temma",
  name: "Kishido Temma",
  startDate: new Date(Date.UTC(2019, 11, 14)),
  birthdayDate: new Date(Date.UTC(0, 3, 18)),
  events: [],
  subscribers: [
    { subscriber: 1e3, date: new Date(Date.UTC(2019, 11, 15)) },
    { subscriber: 5e3, date: new Date(Date.UTC(2020, 3, 6)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 5, 5)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2020, 8, 16)) },
    { subscriber: 3e4, date: new Date(Date.UTC(2020, 10, 18)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2021, 1, 12)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2021, 2, 26)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2021, 4, 13)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2021, 5, 11)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2021, 6, 2)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 7, 14)) },
    { subscriber: 1.4e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};
