import { Talent } from "../types";

export const HoshimachiSuisei: Talent = {
  id: "suisei",
  name: "Hoshimachi Suisei",
  startDate: new Date(Date.UTC(2018, 2, 22)),
  birthdayDate: new Date(Date.UTC(0, 2, 22)),
  events: [],
  subscribers: [
    { subscriber: 1e3, date: new Date(Date.UTC(2018, 4, 1)) },
    { subscriber: 5e3, date: new Date(Date.UTC(2018, 11, 29)) },
    { subscriber: 1e4, date: new Date(Date.UTC(2019, 5, 5)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2019, 7, 15)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 10, 22)) },
    { subscriber: 7.5e4, date: new Date(Date.UTC(2020, 0, 1)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2020, 0, 31)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 2, 5)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 3, 6)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 4, 5)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 5, 2)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 7, 4)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 8, 27)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 10, 30)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 0, 16)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 2, 16)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 4, 13)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 5, 26)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 11, 8)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2022, 5, 16)) },
    { subscriber: 1.75e6, date: new Date(Date.UTC(2023, 1, 2)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2023, 8, 27)) },
    { subscriber: 2.29e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const HoshimachiSuiseiIndie1: Talent = {
  ...HoshimachiSuisei,
  startDate: HoshimachiSuisei.startDate,
  endDate: new Date(Date.UTC(2018, 6)),
};

export const HoshimachiSuiseiSignal: Talent = {
  ...HoshimachiSuisei,
  startDate: new Date(Date.UTC(2018, 6)),
  endDate: new Date(Date.UTC(2018, 7, 4)),
};

export const HoshimachiSuiseiIndie2: Talent = {
  ...HoshimachiSuisei,
  startDate: new Date(Date.UTC(2018, 7, 4)),
  endDate: new Date(Date.UTC(2019, 4, 19)),
};

export const HoshimachiSuiseiINNK: Talent = {
  ...HoshimachiSuisei,
  startDate: new Date(Date.UTC(2019, 4, 19)),
  endDate: new Date(Date.UTC(2019, 11, 1)),
};

export const HoshimachiSuiseiHolo: Talent = {
  ...HoshimachiSuisei,
  startDate: HoshimachiSuiseiINNK.endDate!,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const HoshimachiSuiseiHoloPro: Talent = {
  ...HoshimachiSuisei,
  startDate: new Date(Date.UTC(2019, 11, 2)),
  endDate: new Date(Date.UTC(2021, 7, 30)),
};

export const HoshimachiSuisei0: Talent = {
  ...HoshimachiSuisei,
  startDate: new Date(Date.UTC(2021, 7, 30)),
};
