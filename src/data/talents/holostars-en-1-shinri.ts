import { Talent } from "../types";

export const JosuijiShinri: Talent = {
  id: "shinri",
  name: "Josuiji Shinri",
  startDate: new Date(Date.UTC(2023, 0, 7)),
  birthdayDate: new Date(Date.UTC(0, 5, 23)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 4, 21)) },
    { subscriber: 1.24e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
