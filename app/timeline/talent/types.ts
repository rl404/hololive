import { Group } from "@/src/data/types";

export type TimelineData = {
  yearMonth: YearMonth;
  groups: TimelineGroupData[];
};

export type TimelineGroupData = Group & {
  colSpanBefore: number;
  colSpan: number;
  colSpanAfter: number;
};

export type YearMonth = {
  [year: number]: number[];
};
