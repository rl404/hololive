import { Talent } from "../types";

export const YozoraMel: Talent = {
  id: "mel",
  name: "Yozora Mel",
  startDate: new Date(Date.UTC(2018, 4, 13)),
  endDate: new Date(Date.UTC(2024, 0, 16)),
  birthdayDate: new Date(Date.UTC(0, 9, 31)),
  events: [],
  subscribers: [
    { subscriber: 2e4, date: new Date(Date.UTC(2018, 11, 13)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 5, 1)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 7, 23)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 0, 29)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 6, 7)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 7, 31)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 9, 27)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 0, 21)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2021, 4, 4)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 8, 6)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 2, 26)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 1, 2)) },
    { subscriber: 8.82e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const YozoraMelCover: Talent = {
  ...YozoraMel,
  startDate: YozoraMel.startDate,
  endDate: new Date(Date.UTC(2018, 5, 1)),
};

export const YozoraMelHolo: Talent = {
  ...YozoraMel,
  startDate: new Date(Date.UTC(2018, 5, 1)),
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const YozoraMelHoloPro: Talent = {
  ...YozoraMel,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: YozoraMel.endDate,
};
