import { Talent } from "../types";

export const KazamaIroha: Talent = {
  id: "iroha",
  name: "Kazama Iroha",
  startDate: new Date(Date.UTC(2021, 10, 30)),
  birthdayDate: new Date(Date.UTC(0, 5, 18)),
  events: [],
  subscribers: [
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 10, 26)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 10, 30)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 11, 5)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 11, 19)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 1, 15)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 6, 29)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2023, 1, 17)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 8, 3)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2024, 2, 29)) },
    { subscriber: 9.27e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};
