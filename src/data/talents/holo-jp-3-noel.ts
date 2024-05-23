import { Talent } from "../types";

export const ShiroganeNoel: Talent = {
  id: "noel",
  name: "Shirogane Noel",
  startDate: new Date(Date.UTC(2019, 7, 8)),
  birthdayDate: new Date(Date.UTC(0, 10, 24)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2019, 7, 7)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2019, 7, 9)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 8, 14)) },
    { subscriber: 7.7e4, date: new Date(Date.UTC(2019, 9, 29)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 10, 17)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2019, 11, 27)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 1, 9)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 3, 10)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 4, 17)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 6, 24)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 8, 7)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 9, 25)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 11, 5)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 0, 21)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 2, 6)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 3, 21)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 7, 14)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2021, 5, 2)) },
    { subscriber: 1.86e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const ShiroganeNoelHolo: Talent = {
  ...ShiroganeNoel,
  startDate: ShiroganeNoel.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const ShiroganeNoelHoloPro: Talent = {
  ...ShiroganeNoel,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
