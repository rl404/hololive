import { Talent } from "../types";

export const AkiRosenthal: Talent = {
  id: "aki",
  name: "Aki Rosenthal",
  startDate: new Date(Date.UTC(2018, 5, 1)),
  birthdayDate: new Date(Date.UTC(0, 1, 17)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 8, 27)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2019, 3, 9)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 11, 3)) },
    { subscriber: 7.5e4, date: new Date(Date.UTC(2020, 1, 4)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 2, 26)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 5, 23)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 7, 11)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 7, 28)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 9, 15)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 0, 9)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 3, 4)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 9, 26)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 7, 19)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 8, 2)) },
    { subscriber: 8.75e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const AkiRosenthalHolo: Talent = {
  ...AkiRosenthal,
  startDate: AkiRosenthal.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const AkiRosenthalHoloPro: Talent = {
  ...AkiRosenthal,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
