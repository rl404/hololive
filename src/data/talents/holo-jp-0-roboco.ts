import { Talent } from "../types";

export const Roboco: Talent = {
  id: "roboco",
  name: "Roboto-san",
  startDate: new Date(Date.UTC(2018, 2, 4)),
  birthdayDate: new Date(Date.UTC(0, 4, 23)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 2, 30)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2018, 4, 7)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2018, 9, 27)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 4, 7)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 0, 14)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 3, 16)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 7, 4)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 10, 7)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 0, 16)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 3, 25)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 6, 16)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2022, 0, 9)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2023, 0, 31)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2024, 3, 12)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const RobocoCover: Talent = {
  ...Roboco,
  startDate: Roboco.startDate,
  endDate: new Date(Date.UTC(2018, 5, 1)),
};

export const RobocoHolo: Talent = {
  ...Roboco,
  startDate: new Date(Date.UTC(2018, 5, 1)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const RobocoHoloPro: Talent = {
  ...Roboco,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: new Date(Date.UTC(2021, 7, 30)),
};

export const Roboco0: Talent = {
  ...Roboco,
  startDate: new Date(Date.UTC(2021, 7, 30)),
};
