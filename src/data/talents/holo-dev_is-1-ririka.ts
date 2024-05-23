import { Talent } from "../types";

export const IchijouRirika: Talent = {
  id: "ririka",
  name: "Ichijou Ririka",
  startDate: new Date(Date.UTC(2023, 8, 9)),
  birthdayDate: new Date(Date.UTC(0, 4, 12)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 8, 10)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 10, 14)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2024, 1, 1)) },
    { subscriber: 3.95e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-black",
};
