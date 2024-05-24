"use client";

import BackgroundTalent from "../BackgroundTalent";
import Control from "../Control";
import { useCtx } from "../context";
import {
  Timeline,
  TimelineGroup,
  TimelineMonths,
  TimelineYear,
} from "./Timeline";
import { getTimelineData } from "./utils";
import { MonthNames } from "@/src/const";
import { scrollToID } from "@/src/libs/utils";

export default function TimelineTalentPage() {
  const ctx = useCtx();

  const data = getTimelineData();

  const startDate = new Date(
    parseInt(Object.keys(data.yearMonth)[0]),
    Object.values(data.yearMonth)[0][0],
  );
  const endDate = new Date(Date.UTC(2024, 4));

  const onFirst = () => {
    scrollToID(
      `${MonthNames[startDate.getMonth()]}-${startDate.getFullYear()}`,
    );
  };

  const onPrevious = () => {
    const date = new Date(ctx.year, ctx.month);
    date.setMonth(date.getMonth() - 1);
    scrollToID(`${MonthNames[date.getMonth()]}-${date.getFullYear()}`);
  };

  const onNext = () => {
    const date = new Date(ctx.year, ctx.month);
    date.setMonth(date.getMonth() + 1);
    if (date > endDate) return;
    scrollToID(`${MonthNames[date.getMonth()]}-${date.getFullYear()}`);
  };

  const onLast = () => {
    scrollToID(`${MonthNames[endDate.getMonth()]}-${endDate.getFullYear()}`);
  };

  return (
    <>
      <BackgroundTalent />
      <div className="fixed left-0 top-0 z-50 w-full border-b bg-background p-4">
        <h1 className="text-center">Hololive Talent Timeline</h1>
      </div>
      <div className="w-fit px-1/2 pb-1/3">
        <div className="sticky top-0 z-10 h-20 w-full bg-background" />
        <Timeline>
          <TimelineYear yearMonth={data.yearMonth} />
          <TimelineMonths yearMonth={data.yearMonth} />
          {data.groups.map((g, i) => (
            <TimelineGroup key={g.id + i} group={g} />
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
