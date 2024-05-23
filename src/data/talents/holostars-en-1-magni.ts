import { Talent } from "../types";

export const MagniDezmond: Talent = {
  id: "magni",
  name: "Magni Dezmond",
  startDate: new Date(Date.UTC(2022, 6, 22)),
  endDate: new Date(Date.UTC(2023, 7, 31)),
  birthdayDate: new Date(Date.UTC(0, 9, 21)),
  events: [],
  subscribers: [
    { subscriber: 6e4, date: new Date(Date.UTC(2022, 6, 22)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2022, 6, 23)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2022, 6, 24)) },
    { subscriber: 1.1e5, date: new Date(Date.UTC(2022, 6, 26)) },
    { subscriber: 1.2e5, date: new Date(Date.UTC(2022, 6, 30)) },
    { subscriber: 1.3e5, date: new Date(Date.UTC(2022, 7, 8)) },
    { subscriber: 1.96e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
