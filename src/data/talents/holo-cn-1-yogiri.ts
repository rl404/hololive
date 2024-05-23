import { Talent } from "../types";

export const Yogiri: Talent = {
  id: "yogiri",
  name: "Yogiri",
  startDate: new Date(Date.UTC(2019, 8, 27)),
  endDate: new Date(Date.UTC(2020, 11, 20)),
  birthdayDate: new Date(Date.UTC(0, 3, 1)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 8, 27)) },
    { subscriber: 6.8e4, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-pink-500",
};

export const YogiriHolo: Talent = {
  ...Yogiri,
  startDate: Yogiri.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const YogiriHoloPro: Talent = {
  ...Yogiri,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: Yogiri.endDate,
};
