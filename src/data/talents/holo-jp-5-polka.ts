import { Talent } from "../types";

export const OmaruPolka: Talent = {
  id: "polka",
  name: "Omaru Polka",
  startDate: new Date(Date.UTC(2020, 7, 16)),
  birthdayDate: new Date(Date.UTC(0, 0, 30)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 7, 16)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 7, 22)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 9, 11)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 10, 28)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 0, 9)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 2, 7)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 4, 30)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 7, 28)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2022, 0, 3)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2022, 6, 31)) },
    { subscriber: 1.2e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
