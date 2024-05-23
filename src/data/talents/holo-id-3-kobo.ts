import { Talent } from "../types";

export const KoboKanaeru: Talent = {
  id: "kobo",
  name: "Kobo Kanaeru",
  startDate: new Date(Date.UTC(2022, 2, 27)),
  birthdayDate: new Date(Date.UTC(0, 11, 12)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2022, 2, 29)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2022, 3, 5)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2022, 3, 30)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 4, 12)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 4, 25)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 5, 6)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2022, 5, 19)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2022, 6, 4)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2022, 6, 10)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2022, 8, 15)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2023, 3, 20)) },
    { subscriber: 2.42e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-orange-500",
};
