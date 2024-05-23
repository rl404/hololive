import { Talent } from "../types";

export const UruhaRushia: Talent = {
  id: "rushia",
  name: "Uruha Rushia",
  startDate: new Date(Date.UTC(2019, 7, 18)),
  endDate: new Date(Date.UTC(2022, 1, 24)),
  birthdayDate: new Date(Date.UTC(0, 0, 22)),
  events: [],
  subscribers: [
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 9, 19)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 10, 10)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 11, 26)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 1, 13)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 3, 9)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 4, 12)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 5, 8)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 6, 23)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 8, 4)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 9, 18)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 10, 22)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2020, 11, 25)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 1, 5)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 2, 2)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 6, 2)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2021, 11, 10)) },
    { subscriber: 1.36e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const UruhaRushiaHolo: Talent = {
  ...UruhaRushia,
  startDate: UruhaRushia.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const UruhaRushiaHoloPro: Talent = {
  ...UruhaRushia,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: UruhaRushia.endDate,
};
