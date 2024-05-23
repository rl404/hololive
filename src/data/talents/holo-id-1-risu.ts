import { Talent } from "../types";

export const AyundaRisu: Talent = {
  id: "risu",
  name: "Ayunda Risu",
  startDate: new Date(Date.UTC(2020, 3, 10)),
  birthdayDate: new Date(Date.UTC(0, 0, 15)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 3, 11)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2020, 3, 23)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 7, 9)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 10, 7)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 10, 21)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 11, 6)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 2, 11)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 7, 11)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 1, 7)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 6, 12)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 2, 13)) },
    { subscriber: 8.68e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-orange-500",
};
