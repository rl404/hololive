import { Talent } from "../types";

export const OtonoseKanade: Talent = {
  id: "kanade",
  name: "Otonose Kanade",
  startDate: new Date(Date.UTC(2023, 8, 9)),
  birthdayDate: new Date(Date.UTC(0, 3, 20)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 8, 10)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 9, 20)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2024, 1, 14)) },
    { subscriber: 3.78e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-black",
};
