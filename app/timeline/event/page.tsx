"use client";

import BackgroundTalent from "../BackgroundTalent";
import Control from "../Control";
import { useCtx } from "../context";
import {
  Timeline,
  TimelineEvent,
  TimelineMonth,
  TimelineYear,
} from "./Timeline";
import { TimelineData } from "./types";
import { getTimelineData } from "./utils";
import { MonthNames } from "@/src/const";
import { scrollToID } from "@/src/libs/utils";
import { useEffect, useState } from "react";

export default function TimelineEventPage() {
  const ctx = useCtx();

  const [data, setData] = useState<TimelineData>({});

  useEffect(() => {
    setData(getTimelineData());
  }, []);

  const onFirst = () => {
    const year = Object.keys(data)[0];
    const month = Object.keys(data[parseInt(year)])[0];
    scrollToID(`${MonthNames[parseInt(month)]}-${year}`);
  };

  const onPrevious = () => {
    const date = new Date(ctx.year, ctx.month);
    date.setMonth(date.getMonth() - 1);
    scrollToID(`${MonthNames[date.getMonth()]}-${date.getFullYear()}`);
  };

  const onNext = () => {
    const date = new Date(ctx.year, ctx.month);
    date.setMonth(date.getMonth() + 1);
    scrollToID(`${MonthNames[date.getMonth()]}-${date.getFullYear()}`);
  };

  const onLast = () => {
    const lastYearIndex = Object.keys(data).length - 1;
    const year = Object.keys(data)[lastYearIndex];

    const lastMonthIndex = Object.keys(data[parseInt(year)]).length - 1;
    const month = Object.keys(data[parseInt(year)])[lastMonthIndex];

    scrollToID(`${MonthNames[parseInt(month)]}-${year}`);
  };

  return (
    <>
      <BackgroundTalent />
      <div className="fixed left-0 top-0 z-10 w-full border-b bg-background p-4">
        <h1 className="text-center">Hololive Event Timeline</h1>
      </div>
      <div className="mb-20 mt-52 flex w-fit px-1/2">
        <Timeline>
          {Object.entries(data).map((yearData) => (
            <TimelineYear key={yearData[0]} year={parseInt(yearData[0])}>
              {Object.entries(yearData[1]).map((monthData) => (
                <TimelineMonth
                  key={yearData[0] + monthData[0]}
                  year={parseInt(yearData[0])}
                  month={parseInt(monthData[0])}
                >
                  {monthData[1].map((e) => (
                    <TimelineEvent key={e.id} event={e} />
                  ))}
                </TimelineMonth>
              ))}
            </TimelineYear>
          ))}
        </Timeline>
      </div>
      <Control
        onFirst={onFirst}
        onPrevious={onPrevious}
        onNext={onNext}
        onLast={onLast}
      />
    </>
  );
}
