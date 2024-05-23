import { Talent } from "../types";

export const OuroKronii: Talent = {
  id: "kronii",
  name: "Ouro Kronii",
  startDate: new Date(Date.UTC(2021, 7, 23)),
  birthdayDate: new Date(Date.UTC(0, 2, 4)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 7, 23)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 8, 4)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 8, 29)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 9, 29)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 0, 1)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 3, 12)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2022, 9, 12)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2023, 7, 29)) },
    { subscriber: 9.6e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};

export const OuroKroniiCouncil: Talent = {
  ...OuroKronii,
  startDate: OuroKronii.startDate,
  endDate: new Date(Date.UTC(2023, 9, 9)),
  events: [],
};

export const OuroKroniiPromise: Talent = {
  ...OuroKronii,
  startDate: new Date(Date.UTC(2023, 9, 9)),
  events: [],
};
