import { Talent } from "../types";

export const NekomataOkayu: Talent = {
  id: "okayu",
  name: "Nekomata Okayu",
  startDate: new Date(Date.UTC(2019, 3, 6)),
  birthdayDate: new Date(Date.UTC(0, 1, 22)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2019, 3, 6)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2019, 4, 2)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 6, 14)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 8, 15)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 10, 22)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 0, 18)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 2, 9)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 3, 22)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 4, 26)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 6, 27)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 8, 10)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 9, 27)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 11, 5)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 0, 13)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 1, 23)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 3, 17)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 10, 27)) },
    { subscriber: 1.79e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const NekomataOkayuHolo: Talent = {
  ...NekomataOkayu,
  startDate: NekomataOkayu.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const NekomataOkayuHoloPro: Talent = {
  ...NekomataOkayu,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
