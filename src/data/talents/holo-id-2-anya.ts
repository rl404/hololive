import { Talent } from "../types";

export const AnyaMelfissa: Talent = {
  id: "anya",
  name: "Anya Melfissa",
  startDate: new Date(Date.UTC(2020, 11, 5)),
  birthdayDate: new Date(Date.UTC(0, 2, 12)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 11, 5)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 0, 12)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 4, 4)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 10, 6)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 5, 20)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2023, 1, 4)) },
    { subscriber: 6.9e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-orange-500",
};
