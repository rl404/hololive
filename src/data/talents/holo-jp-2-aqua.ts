import { Talent } from "../types";

export const MinatoAqua: Talent = {
  id: "aqua",
  name: "Minato Aqua",
  startDate: new Date(Date.UTC(2018, 7, 8)),
  birthdayDate: new Date(Date.UTC(0, 11, 1)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 9, 4)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 2, 20)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 3, 21)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 5, 2)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2019, 7, 26)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2019, 11, 25)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 0, 19)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 1, 6)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 3, 8)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 4, 30)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 7, 5)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 8, 26)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2020, 10, 6)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2020, 11, 10)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 0, 13)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 4, 24)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2022, 1, 2)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2024, 4, 9)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const MinatoAquaHolo: Talent = {
  ...MinatoAqua,
  startDate: MinatoAqua.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const MinatoAquaHoloPro: Talent = {
  ...MinatoAqua,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
