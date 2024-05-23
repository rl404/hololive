import { Talent } from "../types";

export const TakanashiKiara: Talent = {
  id: "kiara",
  name: "Takanashi Kiara",
  startDate: new Date(Date.UTC(2020, 8, 12)),
  birthdayDate: new Date(Date.UTC(0, 6, 6)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 8, 13)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 8, 20)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 9, 11)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 9, 29)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 10, 23)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 11, 12)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 0, 10)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 1, 14)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 3, 10)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 4, 30)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 10, 10)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2023, 9, 21)) },
    { subscriber: 1.51e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};
