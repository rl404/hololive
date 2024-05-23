import { Talent } from "../types";

export const UtsugiUyu: Talent = {
  id: "uyu",
  name: "Utsugi Uyu",
  startDate: new Date(Date.UTC(2022, 2, 29)),
  birthdayDate: new Date(Date.UTC(0, 4, 10)),
  events: [],
  subscribers: [
    { subscriber: 3e4, date: new Date(Date.UTC(2022, 2, 30)) },
    { subscriber: 4e4, date: new Date(Date.UTC(2022, 3, 6)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2022, 4, 1)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2022, 6, 21)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2022, 9, 1)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2023, 4, 5)) },
    { subscriber: 9.85e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};
