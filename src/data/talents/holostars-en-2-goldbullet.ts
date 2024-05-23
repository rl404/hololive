import { Talent } from "../types";

export const Goldbullet: Talent = {
  id: "goldbullet",
  name: "Goldbullet",
  startDate: new Date(Date.UTC(2023, 10, 18)),
  birthdayDate: new Date(Date.UTC(0, 5, 30)),
  events: [],
  subscribers: [
    { subscriber: 5e4, date: new Date(Date.UTC(2023, 11, 22)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2024, 2, 17)) },
    { subscriber: 6.3e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
