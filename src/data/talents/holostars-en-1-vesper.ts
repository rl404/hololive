import { Talent } from "../types";

export const NoirVesper: Talent = {
  id: "vesper",
  name: "Noir Vesper",
  startDate: new Date(Date.UTC(2022, 6, 23)),
  endDate: new Date(Date.UTC(2023, 7, 31)),
  birthdayDate: new Date(Date.UTC(0, 1, 13)),
  events: [],
  subscribers: [
    { subscriber: 5e4, date: new Date(Date.UTC(2022, 6, 22)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2022, 6, 23)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2022, 6, 24)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2022, 6, 25)) },
    { subscriber: 1.1e5, date: new Date(Date.UTC(2022, 6, 27)) },
    { subscriber: 1.2e5, date: new Date(Date.UTC(2022, 7, 2)) },
    { subscriber: 1.3e5, date: new Date(Date.UTC(2022, 7, 9)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 0, 9)) },
    { subscriber: 2.08e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-indigo-500",
};
