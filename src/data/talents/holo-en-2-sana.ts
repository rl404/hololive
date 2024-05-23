import { Talent } from "../types";

export const TsukumoSana: Talent = {
  id: "sana",
  name: "Tsukumo Sana",
  startDate: new Date(Date.UTC(2021, 7, 23)),
  endDate: new Date(Date.UTC(2022, 6, 31)),
  birthdayDate: new Date(Date.UTC(0, 5, 10)),
  events: [],
  subscribers: [
    { subscriber: 1.5e5, date: new Date(Date.UTC(2021, 7, 23)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 9, 13)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2022, 2, 10)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2022, 11, 25)) },
    { subscriber: 4.11e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};
