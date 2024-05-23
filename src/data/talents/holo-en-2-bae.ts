import { Talent } from "../types";

export const HakosBaelz: Talent = {
  id: "bae",
  name: "Hakos Baelz",
  startDate: new Date(Date.UTC(2021, 7, 23)),
  birthdayDate: new Date(Date.UTC(0, 1, 29)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 7, 23)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 9, 12)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 11, 16)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 2, 12)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 7, 8)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 10, 10)) },
    { subscriber: 9.02e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};

export const HakosBaelzCouncil: Talent = {
  ...HakosBaelz,
  startDate: HakosBaelz.startDate,
  endDate: new Date(Date.UTC(2023, 9, 9)),
  events: [],
};

export const HakosBaelzPromise: Talent = {
  ...HakosBaelz,
  startDate: new Date(Date.UTC(2023, 9, 9)),
  events: [],
};
