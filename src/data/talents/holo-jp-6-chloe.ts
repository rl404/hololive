import { Talent } from "../types";

export const SakamataChloe: Talent = {
  id: "chloe",
  name: "Sakamata Chloe",
  startDate: new Date(Date.UTC(2021, 10, 29)),
  birthdayDate: new Date(Date.UTC(0, 4, 18)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 10, 26)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 10, 29)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 10, 30)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 11, 1)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 11, 3)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 11, 10)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 0, 6)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2022, 3, 7)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2022, 7, 31)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2023, 1, 18)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
