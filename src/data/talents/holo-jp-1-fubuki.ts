import { Talent } from "../types";

export const ShirakamiFubuki: Talent = {
  id: "fubuki",
  name: "Shirakami Fubuki",
  startDate: new Date(Date.UTC(2018, 5, 1)),
  birthdayDate: new Date(Date.UTC(0, 9, 5)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 5, 16)) },
    { subscriber: 2.5e4, date: new Date(Date.UTC(2018, 6, 16)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2018, 8, 29)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2018, 10, 13)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 2, 8)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2019, 8, 1)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2019, 11, 13)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 1, 23)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 3, 19)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 4, 28)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2020, 6, 15)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2020, 7, 20)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2020, 8, 29)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2020, 10, 5)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2021, 1, 12)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2021, 6, 2)) },
    { subscriber: 1.75e6, date: new Date(Date.UTC(2021, 11, 15)) },
    { subscriber: 2e6, date: new Date(Date.UTC(2022, 9, 25)) },
    { subscriber: 2.36e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const ShirakamiFubukiHolo: Talent = {
  ...ShirakamiFubuki,
  startDate: ShirakamiFubuki.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const ShirakamiFubukiHoloPro: Talent = {
  ...ShirakamiFubuki,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
