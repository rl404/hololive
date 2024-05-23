import { Talent } from "../types";

export const KaelaKovalskia: Talent = {
  id: "kaela",
  name: "Kaela Kovalskia",
  startDate: new Date(Date.UTC(2022, 2, 26)),
  birthdayDate: new Date(Date.UTC(0, 7, 30)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2022, 3, 23)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2022, 5, 22)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2022, 7, 3)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 7, 16)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2023, 3, 6)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2023, 11, 29)) },
    { subscriber: 7.39e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-orange-500",
};
