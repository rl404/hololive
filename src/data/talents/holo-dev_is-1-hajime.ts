import { Talent } from "../types";

export const TodorokiHajime: Talent = {
  id: "hajime",
  name: "Todoroki Hajime",
  startDate: new Date(Date.UTC(2023, 8, 10)),
  birthdayDate: new Date(Date.UTC(0, 5, 7)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2023, 8, 12)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2023, 8, 30)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2023, 11, 14)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2024, 2, 4)) },
    { subscriber: 4.65e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-black",
};
