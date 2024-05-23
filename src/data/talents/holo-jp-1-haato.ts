import { Talent } from "../types";

export const AkaiHaato: Talent = {
  id: "haato",
  name: "Akai Haato",
  startDate: new Date(Date.UTC(2018, 5, 2)),
  birthdayDate: new Date(Date.UTC(0, 6, 10)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 6, 13)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2018, 10, 27)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 2, 16)) },
    { subscriber: 77777, date: new Date(Date.UTC(2019, 5, 6)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 8, 1)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 1, 12)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 2, 18)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 4, 5)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 6, 3)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 7, 16)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 8, 29)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 9, 28)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2020, 10, 27)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 0, 12)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2022, 1, 10)) },
    { subscriber: 1.2e6, date: new Date(Date.UTC(2022, 6, 28)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2022, 7, 29)) },
    { subscriber: 1.49e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const AkaiHaatoHolo: Talent = {
  ...AkaiHaato,
  startDate: AkaiHaato.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const AkaiHaatoHoloPro: Talent = {
  ...AkaiHaato,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
