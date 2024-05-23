import { Talent } from "../types";

export const KanadeIzuru: Talent = {
  id: "izuru",
  name: "Kanade Izuru",
  startDate: new Date(Date.UTC(2019, 5, 22)),
  birthdayDate: new Date(Date.UTC(0, 7, 12)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2019, 11, 18)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 1, 22)) },
    { subscriber: 1.5e4, date: new Date(Date.UTC(2020, 4, 16)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2020, 6, 6)) },
    { subscriber: 3e4, date: new Date(Date.UTC(2020, 8, 2)) },
    { subscriber: 4e4, date: new Date(Date.UTC(2020, 9, 13)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2020, 10, 21)) },
    { subscriber: 6e4, date: new Date(Date.UTC(2021, 0, 4)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2021, 0, 19)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2021, 1, 13)) },
    { subscriber: 9e4, date: new Date(Date.UTC(2021, 2, 14)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2021, 3, 9)) },
    { subscriber: 1.1e5, date: new Date(Date.UTC(2021, 4, 7)) },
    { subscriber: 1.2e5, date: new Date(Date.UTC(2021, 5, 1)) },
    { subscriber: 1.3e5, date: new Date(Date.UTC(2021, 5, 29)) },
    { subscriber: 1.4e5, date: new Date(Date.UTC(2021, 6, 29)) },
    { subscriber: 1.8e5, date: new Date(Date.UTC(2022, 4, 23)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2022, 9, 23)) },
    { subscriber: 2.38e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};

export const KanadeIzuruHolo: Talent = {
  ...KanadeIzuru,
  startDate: KanadeIzuru.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const KanadeIzuruHoloPro: Talent = {
  ...KanadeIzuru,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
