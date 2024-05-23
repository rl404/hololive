import { Talent } from "../types";

export const RegisAltare: Talent = {
  id: "regis",
  name: "Regis Altare",
  startDate: new Date(Date.UTC(2022, 6, 22)),
  birthdayDate: new Date(Date.UTC(0, 0, 29)),
  events: [],
  subscribers: [
    { subscriber: 7e4, date: new Date(Date.UTC(2022, 6, 22)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2022, 6, 23)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2022, 6, 24)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2022, 6, 25)) },
    { subscriber: 1.1e5, date: new Date(Date.UTC(2022, 6, 26)) },
    { subscriber: 1.2e5, date: new Date(Date.UTC(2022, 6, 31)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2022, 10, 1)) },
    { subscriber: 2.92e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
