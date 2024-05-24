import { TimelineData, TimelineEventData, YearMonth } from "./types";
import { MonthNames } from "@/src/const";
import { CoverCorp } from "@/src/data/companies/cover";
import { Group } from "@/src/data/types";

export const getEventsRecursive = (data: Group): TimelineEventData[] => {
  return [
    ...data.events.map((m) => ({
      ...m,
      sourceName: data.name,
      badgeColor: data.badgeColor,
    })),
    ...data.groups
      .map((g) => getEventsRecursive(g))
      .reduce((events, g) => [...events, ...g], []),
  ];
};

export const getYearMonths = (startDate: Date, endDate: Date): YearMonth => {
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();

  const result: YearMonth = {};

  for (let year = startYear; year <= endYear; year++) {
    const startMonth = year === startYear ? startDate.getMonth() : 0;
    const endMonth = year === endYear ? endDate.getMonth() : 11;

    const months: number[] = [];
    for (let month = startMonth; month <= endMonth; month++) {
      months.push(month);
    }

    result[year] = months;
  }

  return result;
};

export const getTimelineData = (): TimelineData => {
  const events: TimelineEventData[] = getEventsRecursive(CoverCorp).sort(
    (a, b) =>
      a.date == b.date ? (a.id < b.id ? -1 : 1) : a.date < b.date ? -1 : 1,
  );

  const data: TimelineData = Object.entries(
    getYearMonths(events[0].date, events[events.length - 1].date),
  ).reduce(
    (d, v) => ({
      ...d,
      [v[0]]: v[1].reduce((res, m) => ({ ...res, [m]: [] }), {}),
    }),
    {},
  );

  events.forEach((e) => {
    const year = e.date.getFullYear();
    const month = e.date.getMonth();
    data[year][month].push(e);
  });

  return data;
};
