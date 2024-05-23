import { Talent } from "../types";

export const NatsuiroMatsuri: Talent = {
  id: "matsuri",
  name: "Natsuiro Matsuri",
  startDate: new Date(Date.UTC(2018, 5, 1)),
  birthdayDate: new Date(Date.UTC(0, 6, 22)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 7, 26)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2019, 0, 8)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 3, 13)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 5, 2)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 7, 27)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2019, 11, 8)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 0, 28)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 2, 16)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 3, 25)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 5, 23)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 7, 14)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 9, 14)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 11, 12)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 0, 25)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 2, 28)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 5, 1)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2022, 5, 21)) },
    { subscriber: 1.42e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const NatsuiroMatsuriHolo: Talent = {
  ...NatsuiroMatsuri,
  startDate: NatsuiroMatsuri.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const NatsuiroMatsuriHoloPro: Talent = {
  ...NatsuiroMatsuri,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
