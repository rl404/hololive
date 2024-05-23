import { Talent } from "../types";

export const GavisBettel: Talent = {
  id: "bettel",
  name: "Gavis Bettel",
  startDate: new Date(Date.UTC(2023, 0, 7)),
  birthdayDate: new Date(Date.UTC(0, 4, 17)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 2, 24)) },
    { subscriber: 1.62e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
