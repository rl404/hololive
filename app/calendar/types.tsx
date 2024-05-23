import { Talent } from "@/src/data/types";

export type MonthData = {
  date: number;
  spillOver: boolean;
  birthday: Talent[];
  anniversary: Talent[];
};
