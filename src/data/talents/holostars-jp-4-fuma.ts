import { Talent } from "../types";

export const YatogamiFuma: Talent = {
  id: "fuma",
  name: "Yatogami Fuma",
  startDate: new Date(Date.UTC(2022, 2, 29)),
  birthdayDate: new Date(Date.UTC(0, 6, 13)),
  events: [],
  subscribers: [
    { subscriber: 3e4, date: new Date(Date.UTC(2022, 2, 29)) },
    { subscriber: 4e4, date: new Date(Date.UTC(2022, 3, 2)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2022, 3, 20)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2022, 5, 20)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2022, 6, 25)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2022, 8, 4)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2022, 10, 2)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 0, 16)) },
    { subscriber: 1.4e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};
