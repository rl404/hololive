import { Event } from "@/src/data/types";

export type TimelineData = {
  [year: number]: {
    [month: number]: TimelineEventData[];
  };
};

export type TimelineEventData = Event & {
  sourceName: string;
  badgeColor?: string;
};

export type YearMonth = {
  [year: number]: number[];
};
