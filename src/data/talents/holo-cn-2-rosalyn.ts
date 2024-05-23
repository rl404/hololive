import { Talent } from "../types";

export const Artia: Talent = {
  id: "artia",
  name: "Artia",
  startDate: new Date(Date.UTC(2020, 3, 11)),
  endDate: new Date(Date.UTC(2020, 10, 19)),
  birthdayDate: new Date(Date.UTC(0, 11, 10)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 6, 14)) },
    { subscriber: 6.7e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-pink-500",
};
