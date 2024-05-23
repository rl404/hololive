import { Talent } from "../types";

export const Civia: Talent = {
  id: "civia",
  name: "Civia",
  startDate: new Date(Date.UTC(2019, 10, 1)),
  endDate: new Date(Date.UTC(2020, 10, 18)),
  birthdayDate: new Date(Date.UTC(0, 10, 18)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 2, 11)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 9, 26)) },
    { subscriber: 1.23e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-pink-500",
};

export const CiviaHolo: Talent = {
  ...Civia,
  startDate: Civia.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const CiviaHoloPro: Talent = {
  ...Civia,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: Civia.endDate,
};
