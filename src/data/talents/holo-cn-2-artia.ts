import { Talent } from "../types";

export const Rosalyn: Talent = {
  id: "rosalyn",
  name: "Rosalyn",
  startDate: new Date(Date.UTC(2020, 3, 5)),
  endDate: new Date(Date.UTC(2020, 11, 27)),
  birthdayDate: new Date(Date.UTC(0, 2, 15)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 3, 26)) },
    { subscriber: 9.1e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-pink-500",
};
