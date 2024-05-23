import { Talent } from "../types";

export const OokamiMio: Talent = {
  id: "mio",
  name: "Ookami Mio",
  startDate: new Date(Date.UTC(2018, 11, 7)),
  birthdayDate: new Date(Date.UTC(0, 7, 20)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 11, 16)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2019, 0, 19)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 4, 17)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 7, 25)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 11, 10)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 1, 28)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 3, 24)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 5, 6)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 6, 11)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 9, 12)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 11, 20)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2021, 1, 20)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 4, 9)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 6, 30)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 11, 8)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2022, 5, 7)) },
    { subscriber: 1.18e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const OokamiMioHolo: Talent = {
  ...OokamiMio,
  startDate: OokamiMio.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const OokamiMioHoloPro: Talent = {
  ...OokamiMio,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
