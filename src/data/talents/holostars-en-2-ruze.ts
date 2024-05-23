import { Talent } from "../types";

export const CrimzonRuze: Talent = {
  id: "ruze",
  name: "Crimzon Ruze",
  startDate: new Date(Date.UTC(2023, 10, 18)),
  birthdayDate: new Date(Date.UTC(0, 8, 30)),
  events: [],
  subscribers: [
    { subscriber: 5e4, date: new Date(Date.UTC(2023, 11, 25)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2024, 1, 22)) },
    { subscriber: 6.7e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
