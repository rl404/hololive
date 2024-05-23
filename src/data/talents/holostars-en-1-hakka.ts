import { Talent } from "../types";

export const BanzoinHakka: Talent = {
  id: "hakka",
  name: "Banzoin Hakka",
  startDate: new Date(Date.UTC(2023, 0, 7)),
  birthdayDate: new Date(Date.UTC(0, 3, 21)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 2, 1)) },
    { subscriber: 1.63e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
