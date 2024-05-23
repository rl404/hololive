import { Talent } from "../types";

export const JuufuuteiRaden: Talent = {
  id: "raden",
  name: "Juufuutei Raden",
  startDate: new Date(Date.UTC(2023, 8, 10)),
  birthdayDate: new Date(Date.UTC(0, 1, 4)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 8, 10)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 8, 19)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2023, 9, 31)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2024, 1, 5)) },
    { subscriber: 4.8e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-black",
};
