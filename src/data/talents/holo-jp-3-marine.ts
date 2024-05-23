import { Talent } from "../types";

export const HoushouMarine: Talent = {
  id: "marine",
  name: "Houshou Marine",
  startDate: new Date(Date.UTC(2019, 7, 11)),
  birthdayDate: new Date(Date.UTC(0, 6, 30)),
  events: [],
  subscribers: [
    { subscriber: 5e3, date: new Date(Date.UTC(2019, 7, 5)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2019, 7, 9)) },
    { subscriber: 2e4, date: new Date(Date.UTC(2019, 7, 16)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 9, 24)) },
    { subscriber: 77777, date: new Date(Date.UTC(2019, 10, 11)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 11, 2)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 0, 21)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 1, 24)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 3, 28)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 5, 18)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 7, 5)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 8, 11)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 9, 19)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2020, 10, 23)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2020, 11, 28)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 0, 18)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 3, 23)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2021, 6, 31)) },
    { subscriber: 1.75e6, date: new Date(Date.UTC(2021, 11, 18)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2022, 7, 1)) },
    { subscriber: 2.5e6, date: new Date(Date.UTC(2023, 6, 30)) },
    { subscriber: 3e6, date: new Date(Date.UTC(2024, 0, 10)) },
    { subscriber: 3.17e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const HoushouMarineHolo: Talent = {
  ...HoushouMarine,
  startDate: HoushouMarine.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const HoushouMarineHoloPro: Talent = {
  ...HoushouMarine,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
