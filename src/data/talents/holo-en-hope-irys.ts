import { Talent } from "../types";

export const Irys: Talent = {
  id: "irys",
  name: "IRyS",
  startDate: new Date(Date.UTC(2021, 6, 11)),
  birthdayDate: new Date(Date.UTC(0, 2, 7)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 6, 7)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 6, 11)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 6, 12)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 6, 18)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 7, 24)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 10, 10)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2022, 2, 29)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2022, 10, 29)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2024, 2, 7)) },
    { subscriber: 1.01e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};

export const IrysHope: Talent = {
  ...Irys,
  startDate: Irys.startDate,
  endDate: new Date(Date.UTC(2023, 9, 9)),
};

export const IrysPromise: Talent = {
  ...Irys,
  startDate: new Date(Date.UTC(2023, 9, 9)),
};
