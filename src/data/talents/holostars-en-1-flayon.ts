import { Talent } from "../types";

export const MachinaXFlayon: Talent = {
  id: "flayon",
  name: "Machina X Flayon",
  startDate: new Date(Date.UTC(2023, 0, 7)),
  birthdayDate: new Date(Date.UTC(0, 5, 5)),
  events: [],
  subscribers: [
    { subscriber: 6e4, date: new Date(Date.UTC(2023, 0, 9)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2023, 0, 11)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2023, 0, 24)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2023, 1, 17)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 3, 2)) },
    { subscriber: 1.42e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
