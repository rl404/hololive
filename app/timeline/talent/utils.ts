import { TimelineData, YearMonth } from "./types";
import { CoverCorp } from "@/src/data/companies/cover";
import { Indie } from "@/src/data/companies/indie";
import { Signal } from "@/src/data/groups/signal";
import { Group } from "@/src/data/types";
import { getMonthDiff } from "@/src/libs/utils";

export const getGroupsRecursive = (data: Group): Group[] => {
  return [
    data,
    ...data.groups
      .map((g) => ({ ...g, badgeColor: g.badgeColor || data.badgeColor }))
      .map((g) => getGroupsRecursive(g))
      .reduce((res, g) => [...res, ...g], []),
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
  const groups = [Indie, Signal, ...getGroupsRecursive(CoverCorp)];

  const stardDate = [...groups].sort((a, b) =>
    a.startDate < b.startDate ? -1 : 1,
  )[0].startDate;

  const endDate = new Date(Date.UTC(2024, 4));

  const yearMonth = getYearMonths(stardDate, endDate);

  return {
    yearMonth: yearMonth,
    groups: groups.map((g) => ({
      ...g,
      colSpanBefore: getMonthDiff(stardDate, g.startDate),
      colSpan: getMonthDiff(g.startDate, g.endDate || endDate) + 1,
      colSpanAfter: getMonthDiff(g.endDate || endDate, endDate),
    })),
  };
};
