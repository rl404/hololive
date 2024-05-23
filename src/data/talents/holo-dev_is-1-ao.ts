import { Talent } from "../types";

export const HiodoshiAo: Talent = {
  id: "ao",
  name: "Hiodoshi Ao",
  startDate: new Date(Date.UTC(2023, 8, 9)),
  birthdayDate: new Date(Date.UTC(0, 1, 27)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 8, 10)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 10, 13)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2024, 0, 14)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2024, 3, 12)) },
    { subscriber: 4.27e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-black",
};
