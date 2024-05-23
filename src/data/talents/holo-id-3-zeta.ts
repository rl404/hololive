import { Talent } from "../types";

export const VestiaZeta: Talent = {
  id: "zeta",
  name: "Vestia Zeta",
  startDate: new Date(Date.UTC(2022, 2, 25)),
  birthdayDate: new Date(Date.UTC(0, 10, 7)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2022, 2, 25)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2022, 2, 27)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2022, 3, 5)) },
    { subscriber: 3.5e5, date: new Date(Date.UTC(2022, 4, 9)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2022, 5, 4)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 5, 26)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 9, 17)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2023, 2, 13)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 7, 28)) },
    { subscriber: 8.74e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-orange-500",
};
