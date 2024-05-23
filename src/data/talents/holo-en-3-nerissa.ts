import { Talent } from "../types";

export const NerissaRavencroft: Talent = {
  id: "nerissa",
  name: "Nerissa Ravencroft",
  startDate: new Date(Date.UTC(2023, 6, 31)),
  birthdayDate: new Date(Date.UTC(0, 10, 21)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 6, 31)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2023, 7, 1)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2023, 7, 14)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2023, 10, 21)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2024, 1, 19)) },
    { subscriber: 6.81e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};
