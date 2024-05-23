import { Talent } from "@/src/data/types";

export type TimelineData = Talent & {
  subscriber: YearMonth;
  order?: number;
};

export type YearMonth = {
  [year: number]: number[];
};
