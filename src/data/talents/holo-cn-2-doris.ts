import { Talent } from "../types";

export const Doris: Talent = {
  id: "doris",
  name: "Doris",
  startDate: new Date(Date.UTC(2020, 3, 3)),
  endDate: new Date(Date.UTC(2020, 11, 5)),
  birthdayDate: new Date(Date.UTC(0, 5, 1)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 4, 12)) },
    { subscriber: 7.6e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-pink-500",
};
