import { Talent } from "../types";

export const AxelSyrios: Talent = {
  id: "axel",
  name: "Axel Syrios",
  startDate: new Date(Date.UTC(2022, 6, 23)),
  birthdayDate: new Date(Date.UTC(0, 10, 1)),
  events: [],
  subscribers: [
    { subscriber: 5e4, date: new Date(Date.UTC(2022, 6, 22)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2022, 6, 23)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2022, 6, 24)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2022, 6, 25)) },
    { subscriber: 1.1e5, date: new Date(Date.UTC(2022, 6, 29)) },
    { subscriber: 1.2e5, date: new Date(Date.UTC(2022, 7, 8)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 3, 3)) },
    { subscriber: 2.31e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
