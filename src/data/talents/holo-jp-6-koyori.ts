import { Talent } from "../types";

export const HakuiKoyori: Talent = {
  id: "koyori",
  name: "Hakui Koyori",
  startDate: new Date(Date.UTC(2021, 10, 28)),
  birthdayDate: new Date(Date.UTC(0, 2, 15)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 10, 26)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 10, 28)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 11, 1)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 11, 15)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 0, 23)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 4, 14)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 8, 1)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 0, 6)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2023, 4, 10)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2023, 8, 24)) },
    { subscriber: 1.12e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
