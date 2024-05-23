import { Talent } from "../types";

export const Octavio: Talent = {
  id: "octavio",
  name: "Octavio",
  startDate: new Date(Date.UTC(2023, 10, 18)),
  birthdayDate: new Date(Date.UTC(0, 3, 8)),
  events: [],
  subscribers: [
    { subscriber: 5e4, date: new Date(Date.UTC(2023, 11, 1)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2024, 3, 9)) },
    { subscriber: 7.29e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
