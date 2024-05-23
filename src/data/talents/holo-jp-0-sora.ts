import { Talent } from "../types";

export const TokinoSora: Talent = {
  id: "sora",
  name: "Tokino Sora",
  startDate: new Date(Date.UTC(2017, 8, 7)),
  birthdayDate: new Date(Date.UTC(0, 4, 15)),
  events: [],
  subscribers: [
    { subscriber: 1e2, date: new Date(Date.UTC(2017, 9, 28)) },
    { subscriber: 1e3, date: new Date(Date.UTC(2017, 11, 23)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2017, 11, 30)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2018, 0, 12)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2018, 2, 9)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2018, 5, 8)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2018, 11, 26)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2019, 10, 29)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 3, 9)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 6, 29)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 9, 29)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 0, 5)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 2, 18)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 6, 11)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 11, 6)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2022, 6, 27)) },
    { subscriber: 1.18e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const TokinoSoraCover: Talent = {
  ...TokinoSora,
  startDate: TokinoSora.startDate,
  endDate: new Date(Date.UTC(2018, 5, 1)),
};

export const TokinoSoraHolo: Talent = {
  ...TokinoSora,
  startDate: new Date(Date.UTC(2018, 5, 1)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const TokinoSoraHoloPro: Talent = {
  ...TokinoSora,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: new Date(Date.UTC(2021, 7, 30)),
};

export const TokinoSora0: Talent = {
  ...TokinoSora,
  startDate: new Date(Date.UTC(2021, 7, 30)),
};
