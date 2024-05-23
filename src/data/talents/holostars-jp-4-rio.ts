import { Talent } from "../types";

export const MinaseRio: Talent = {
  id: "rio",
  name: "Minase Rio",
  startDate: new Date(Date.UTC(2022, 2, 30)),
  birthdayDate: new Date(Date.UTC(0, 6, 26)),
  events: [],
  subscribers: [
    { subscriber: 3e4, date: new Date(Date.UTC(2022, 2, 30)) },
    { subscriber: 4e4, date: new Date(Date.UTC(2022, 3, 5)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2022, 4, 7)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 0, 14)) },
    { subscriber: 1.4e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};
