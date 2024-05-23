import { Talent } from "../types";

export const HimemoriLuna: Talent = {
  id: "luna",
  name: "Himemori Luna",
  startDate: new Date(Date.UTC(2020, 0, 4)),
  birthdayDate: new Date(Date.UTC(0, 9, 10)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2019, 11, 27)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2020, 0, 14)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 2, 28)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 5, 4)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 6, 15)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 7, 16)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 8, 22)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 11, 19)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 2, 18)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 5, 24)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 9, 4)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2022, 4, 14)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2023, 2, 11)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2024, 3, 2)) },
    { subscriber: 1.01e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
