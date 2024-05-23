import { Talent } from "../types";

export const CeresFauna: Talent = {
  id: "fauna",
  name: "Ceres Fauna",
  startDate: new Date(Date.UTC(2021, 7, 23)),
  birthdayDate: new Date(Date.UTC(0, 2, 21)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 7, 23)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 9, 10)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 11, 21)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 2, 30)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 7, 6)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2023, 2, 9)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 10, 28)) },
    { subscriber: 8.48e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};

export const CeresFaunaCouncil: Talent = {
  ...CeresFauna,
  startDate: CeresFauna.startDate,
  endDate: new Date(Date.UTC(2023, 9, 9)),
  events: [],
};

export const CeresFaunaPromise: Talent = {
  ...CeresFauna,
  startDate: new Date(Date.UTC(2023, 9, 9)),
  events: [],
};
