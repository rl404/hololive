import { Talent } from "../types";

export const InugamiKorone: Talent = {
  id: "korone",
  name: "Inugami Korone",
  startDate: new Date(Date.UTC(2019, 3, 13)),
  birthdayDate: new Date(Date.UTC(0, 9, 1)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2019, 3, 9)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 7, 15)) },
    { subscriber: 8e4, date: new Date(Date.UTC(2019, 9, 31)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 11, 6)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 0, 17)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 1, 25)) },
    { subscriber: 2.4e5, date: new Date(Date.UTC(2020, 2, 25)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 3, 28)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 4, 30)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 6, 3)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 7, 2)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 7, 31)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2020, 8, 18)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2020, 0, 10)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2020, 10, 1)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 0, 14)) },
    { subscriber: 1.3e6, date: new Date(Date.UTC(2021, 0, 28)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2021, 4, 10)) },
    { subscriber: 1.75e6, date: new Date(Date.UTC(2022, 0, 2)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2023, 5, 28)) },
    { subscriber: 2.09e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const InugamiKoroneHolo: Talent = {
  ...InugamiKorone,
  startDate: InugamiKorone.startDate,
  endDate: new Date(Date.UTC(2018, 5, 1)),
};

export const InugamiKoroneHoloPro: Talent = {
  ...InugamiKorone,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
