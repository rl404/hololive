import { Talent } from "../types";

export const OozoraSubaru: Talent = {
  id: "subaru",
  name: "Oozora Subaru",
  startDate: new Date(Date.UTC(2018, 8, 16)),
  birthdayDate: new Date(Date.UTC(0, 6, 7)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 11, 19)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2019, 1, 7)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 4, 8)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 10, 23)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 3, 11)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 6, 2)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 8, 7)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 10, 4)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 11, 16)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 0, 26)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 2, 4)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 4, 20)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 6, 2)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2022, 0, 16)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2023, 5, 8)) },
    { subscriber: 1.66e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const OozoraSubaruHolo: Talent = {
  ...OozoraSubaru,
  startDate: OozoraSubaru.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const OozoraSubaruHoloPro: Talent = {
  ...OozoraSubaru,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
