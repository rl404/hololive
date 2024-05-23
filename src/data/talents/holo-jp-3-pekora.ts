import { Talent } from "../types";

export const UsadaPekora: Talent = {
  id: "pekora",
  name: "Usada Pekora",
  startDate: new Date(Date.UTC(2019, 6, 17)),
  birthdayDate: new Date(Date.UTC(0, 0, 12)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2019, 6, 19)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 9, 20)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 10, 21)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 11, 28)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 1, 3)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 2, 11)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 4, 4)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 5, 13)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 6, 22)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 7, 21)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 8, 21)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2020, 9, 22)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2020, 10, 12)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2020, 11, 4)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 1, 12)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2021, 5, 2)) },
    { subscriber: 1.75e6, date: new Date(Date.UTC(2021, 9, 23)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2022, 7, 5)) },
    { subscriber: 2.53e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const UsadaPekoraHolo: Talent = {
  ...UsadaPekora,
  startDate: UsadaPekora.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const UsadaPekoraHoloPro: Talent = {
  ...UsadaPekora,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
