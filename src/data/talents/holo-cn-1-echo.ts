import { Talent } from "../types";

export const SpadeEcho: Talent = {
  id: "echo",
  name: "Space Echo",
  startDate: new Date(Date.UTC(2020, 0, 30)),
  endDate: new Date(Date.UTC(2020, 10, 21)),
  birthdayDate: new Date(Date.UTC(0, 4, 30)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 2, 7)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 7, 13)) },
    { subscriber: 1.45e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-pink-500",
};
