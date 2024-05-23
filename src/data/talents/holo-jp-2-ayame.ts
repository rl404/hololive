import { Talent } from "../types";

export const NakiriAyame: Talent = {
  id: "ayame",
  name: "Nakiri Ayame",
  startDate: new Date(Date.UTC(2018, 8, 3)),
  birthdayDate: new Date(Date.UTC(0, 11, 13)),
  events: [],
  subscribers: [
    { subscriber: 1e4, date: new Date(Date.UTC(2018, 8, 30)) },
    { subscriber: 2.2e4, date: new Date(Date.UTC(2019, 0, 4)) },
    { subscriber: 5e4, date: new Date(Date.UTC(2019, 4, 25)) },
    { subscriber: 7e4, date: new Date(Date.UTC(2019, 7, 15)) },
    { subscriber: 1e5, date: new Date(Date.UTC(2019, 10, 10)) },
    { subscriber: 1.5e5, date: new Date(Date.UTC(2020, 1, 8)) },
    { subscriber: 2e5, date: new Date(Date.UTC(2020, 3, 16)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2020, 5, 2)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2020, 6, 10)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2020, 8, 5)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2020, 10, 12)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2020, 11, 22)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2021, 1, 10)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2021, 3, 5)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2021, 4, 23)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2021, 6, 8)) },
    { subscriber: 1.25e6, date: new Date(Date.UTC(2022, 2, 20)) },
    { subscriber: 1.5e6, date: new Date(Date.UTC(2024, 0, 13)) },
    { subscriber: 1.53e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-sky-400",
};

export const NakiriAyameHolo: Talent = {
  ...NakiriAyame,
  startDate: NakiriAyame.startDate,
  endDate: new Date(Date.UTC(2019, 11, 2)),
};

export const NakiriAyameHoloPro: Talent = {
  ...NakiriAyame,
  startDate: new Date(Date.UTC(2019, 11, 2)),
};
