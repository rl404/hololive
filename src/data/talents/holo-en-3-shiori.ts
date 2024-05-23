import { Talent } from "../types";

export const ShioriNovella: Talent = {
  id: "shiori",
  name: "Shiori Novella",
  startDate: new Date(Date.UTC(2023, 6, 30)),
  birthdayDate: new Date(Date.UTC(0, 4, 2)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 6, 31)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2023, 7, 1)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2023, 8, 1)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2024, 3, 22)) },
    { subscriber: 5.08e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};
