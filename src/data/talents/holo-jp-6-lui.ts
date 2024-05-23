import { Talent } from "../types";

export const TakaneLui: Talent = {
  id: "lui",
  name: "Takane Lui",
  startDate: new Date(Date.UTC(2021, 10, 27)),
  birthdayDate: new Date(Date.UTC(0, 5, 11)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 10, 26)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 10, 27)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 11, 5)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2022, 0, 11)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 3, 26)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 8, 1)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2023, 2, 20)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 8, 25)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2024, 3, 30)) },
    { subscriber: 9.06e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
