import { Talent } from "../types";

export const KosekiBijou: Talent = {
  id: "bijou",
  name: "Koseki Bijou",
  startDate: new Date(Date.UTC(2023, 6, 30)),
  birthdayDate: new Date(Date.UTC(0, 3, 14)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 6, 30)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2023, 7, 1)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2023, 7, 23)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2023, 11, 12)) },
    { subscriber: 5.94e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};
