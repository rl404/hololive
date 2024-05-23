import { TimelineData, YearMonth } from "./types";
import { Talents } from "@/src/data/talents/talents";

export const getMonthDiff = (startDate: Date, endDate: Date): number => {
  const year1 = startDate.getFullYear();
  const month1 = startDate.getMonth();
  const year2 = endDate.getFullYear();
  const month2 = endDate.getMonth();
  return month2 + (year2 - year1) * 12 - month1;
};

export const getYearMonths = (startDate: Date, endDate: Date): YearMonth => {
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();

  const result: YearMonth = {};

  for (let year = startYear; year <= endYear; year++) {
    result[year] = Array(12).fill(0);
  }

  return result;
};

export const getTimelineData = (): TimelineData[] => {
  return Talents.map((t) => {
    t.subscribers.push({ subscriber: 0, date: t.startDate });

    t.subscribers = t.subscribers.sort((a, b) =>
      a.date == b.date
        ? a.subscriber < b.subscriber
          ? -1
          : 1
        : a.date < b.date
          ? -1
          : 1,
    );

    const endDate = new Date(Date.UTC(2024, 4));
    const yearMonths = getYearMonths(t.subscribers[0].date, endDate);

    for (let i = 0; i < t.subscribers.length; i++) {
      const subs1 = t.subscribers[i];

      yearMonths[subs1.date.getFullYear()][subs1.date.getMonth()] =
        subs1.subscriber;

      if (i == t.subscribers.length - 1) continue;

      // Fill missing months.
      const subs2 = t.subscribers[i + 1];
      const monthDiff = getMonthDiff(subs1.date, subs2.date);

      const date = new Date(
        Date.UTC(subs1.date.getFullYear(), subs1.date.getMonth()),
      );

      for (let j = 1; j < monthDiff; j++) {
        date.setMonth(date.getMonth() + 1);
        yearMonths[date.getFullYear()][date.getMonth()] = Math.trunc(
          subs1.subscriber +
            ((subs2.subscriber - subs1.subscriber) * j) / monthDiff,
        );
      }
    }

    // Add subs until today.
    const subs = t.subscribers[t.subscribers.length - 1];
    const monthDiff = getMonthDiff(subs.date, endDate);

    const date = new Date(
      Date.UTC(subs.date.getFullYear(), subs.date.getMonth()),
    );
    for (let j = 1; j <= monthDiff; j++) {
      date.setMonth(date.getMonth() + 1);
      yearMonths[date.getFullYear()][date.getMonth()] = subs.subscriber;
    }

    return { ...t, subscriber: yearMonths };
  });
};

export const subsSorter =
  (year: number, month: number) =>
  (a: TimelineData, b: TimelineData): number => {
    const subs1 = !a.subscriber[year] ? 0 : a.subscriber[year][month] || 0;
    const subs2 = !b.subscriber[year] ? 0 : b.subscriber[year][month] || 0;
    return subs1 == subs2 ? (a.name < b.name ? -1 : 1) : subs1 > subs2 ? -1 : 1;
  };
