import { Talent } from "../types";

export const KageyamaShien: Talent = {
  id: "shien",
  name: "Kageyama Shien",
  startDate: new Date(Date.UTC(2020, 3, 30)),
  birthdayDate: new Date(Date.UTC(0, 1, 25)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2020, 4, 3)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 4, 29)) },
    { subscriber: 1.5e4, date: new Date(Date.UTC(2020, 5, 27)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2020, 6, 29)) },
    { subscriber: 3e4, date: new Date(Date.UTC(2020, 8, 22)) },
    { subscriber: 4e4, date: new Date(Date.UTC(2020, 9, 25)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2020, 10, 29)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2020, 11, 29)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2021, 0, 16)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2021, 1, 11)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 2, 20)) },
    { subscriber: 1.1e5, date: new Date(Date.UTC(2021, 3, 20)) },
    { subscriber: 1.2e5, date: new Date(Date.UTC(2021, 4, 17)) },
    { subscriber: 1.3e5, date: new Date(Date.UTC(2021, 5, 10)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2022, 6, 21)) },
    { subscriber: 2.24e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};
