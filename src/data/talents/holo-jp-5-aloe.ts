import { Talent } from "../types";

export const ManoAloe: Talent = {
  id: "aloe",
  name: "Mano Aloe",
  startDate: new Date(Date.UTC(2020, 7, 15)),
  endDate: new Date(Date.UTC(2020, 7, 31)),
  birthdayDate: new Date(Date.UTC(0, 9, 28)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 7, 15)) },
    { subscriber: 1.6e5, date: new Date(Date.UTC(2020, 7, 30)) },
    { subscriber: 2.22e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
