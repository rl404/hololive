import { Talent } from "../types";

export const TsukishitaKaoru: Talent = {
  id: "kaoru",
  name: "Tsukishita Kaoru",
  startDate: new Date(Date.UTC(2020, 3, 29)),
  endDate: new Date(Date.UTC(2020, 6, 28)),
  birthdayDate: new Date(Date.UTC(0, 7, 29)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2020, 3, 29)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 3, 30)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2020, 4, 22)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2020, 5, 7)) },
    { subscriber: 3e4, date: new Date(Date.UTC(2020, 5, 21)) },
    { subscriber: 4e4, date: new Date(Date.UTC(2020, 6, 23)) },
    { subscriber: 3.76e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};
