import { Talent } from "../types";

export const NanashiMumei: Talent = {
  id: "mumei",
  name: "Nanashi Mumei",
  startDate: new Date(Date.UTC(2021, 7, 23)),
  birthdayDate: new Date(Date.UTC(0, 7, 4)),
  events: [],
  subscribers: [
    { subscriber: 2e5, date: new Date(Date.UTC(2021, 7, 23)) },
    { subscriber: 2.5e5, date: new Date(Date.UTC(2021, 8, 5)) },
    { subscriber: 3e5, date: new Date(Date.UTC(2021, 8, 22)) },
    { subscriber: 4e5, date: new Date(Date.UTC(2021, 9, 30)) },
    { subscriber: 5e5, date: new Date(Date.UTC(2022, 0, 2)) },
    { subscriber: 6e5, date: new Date(Date.UTC(2022, 2, 25)) },
    { subscriber: 7e5, date: new Date(Date.UTC(2022, 7, 4)) },
    { subscriber: 8e5, date: new Date(Date.UTC(2023, 2, 19)) },
    { subscriber: 9e5, date: new Date(Date.UTC(2023, 7, 11)) },
    { subscriber: 1e6, date: new Date(Date.UTC(2024, 0, 26)) },
    { subscriber: 1.06e6, date: new Date(Date.UTC(2024, 4, 16)) },
  ],
  bgColor: "bg-violet-500",
};

export const NanashiMumeiCouncil: Talent = {
  ...NanashiMumei,
  startDate: NanashiMumei.startDate,
  endDate: new Date(Date.UTC(2023, 9, 9)),
  events: [],
};

export const NanashiMumeiPromise: Talent = {
  ...NanashiMumei,
  startDate: new Date(Date.UTC(2023, 9, 9)),
  events: [],
};
