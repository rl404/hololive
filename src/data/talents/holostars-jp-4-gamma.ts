import { Talent } from "../types";

export const HizakiGamma: Talent = {
  id: "gamma",
  name: "Hizaki Gamma",
  startDate: new Date(Date.UTC(2022, 2, 30)),
  birthdayDate: new Date(Date.UTC(0, 1, 9)),
  events: [],
  subscribers: [
    { subscriber: 4e4, date: new Date(Date.UTC(2022, 3, 7)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2022, 4, 8)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2022, 6, 19)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2022, 7, 2)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2022, 8, 13)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2022, 9, 15)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2022, 11, 9)) },
    { subscriber: 1.56e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};
