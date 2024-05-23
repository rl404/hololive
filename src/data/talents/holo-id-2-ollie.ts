import { Talent } from "../types";

export const KureijiOllie: Talent = {
  id: "ollie",
  name: "Kureiji Ollie",
  startDate: new Date(Date.UTC(2020, 11, 4)),
  birthdayDate: new Date(Date.UTC(0, 9, 13)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 11, 4)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 11, 6)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 11, 28)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 1, 5)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 2, 24)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 4, 19)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 6, 13)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 8, 3)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 10, 25)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2022, 2, 24)) },
    { subscriber: 1.33e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-orange-500",
};
