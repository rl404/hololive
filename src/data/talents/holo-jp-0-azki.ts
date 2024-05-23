import { Talent } from "../types";

export const Azki: Talent = {
  id: "azki",
  name: "AZKi",
  startDate: new Date(Date.UTC(2018, 10, 15)),
  birthdayDate: new Date(Date.UTC(0, 6, 1)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 11, 24)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2019, 0, 1)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 3, 29)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 11, 5)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 2, 18)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 6, 17)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 8, 23)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 11, 3)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 0, 25)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 3, 13)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 7, 13)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 3, 5)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 11, 25)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 4, 22)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2023, 11, 8)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2024, 3, 27)) },
    { subscriber: 1.01e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const AzkiCover: Talent = {
  ...Azki,
  startDate: Azki.startDate,
  endDate: new Date(Date.UTC(2019, 4, 19)),
};

export const AzkiINNK: Talent = {
  ...Azki,
  startDate: new Date(Date.UTC(2019, 4, 19)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const AzkiINNKHolo: Talent = {
  ...Azki,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: new Date(Date.UTC(2022, 3, 1)),
};

export const AzkiHoloPro: Talent = {
  ...Azki,
  startDate: new Date(Date.UTC(2022, 3, 1)),
};
