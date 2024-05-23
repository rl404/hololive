import { Talent } from "../types";

export const KagamiKira: Talent = {
  id: "kira",
  name: "Kagami Kira",
  startDate: new Date(Date.UTC(2019, 5, 9)),
  endDate: new Date(Date.UTC(2020, 10, 30)),
  birthdayDate: new Date(Date.UTC(0, 9, 26)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2019, 10, 8)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2020, 3, 27)) },
    { subscriber: 3e4, date: new Date(Date.UTC(2020, 9, 3)) },
    { subscriber: 7.53e5, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-purple-500",
};

export const KagamiKiraHolo: Talent = {
  ...KagamiKira,
  startDate: KagamiKira.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const KagamiKiraHoloPro: Talent = {
  ...KagamiKira,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: KagamiKira.endDate,
};
