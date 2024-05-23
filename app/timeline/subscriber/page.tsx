"use client";

import BackgroundTalent from "../BackgroundTalent";
import Control from "../Control";
import { useCtx, useDispatchCtx } from "../context";
import Timeline from "./Timeline";
import { getTimelineData } from "./utils";
import { TokinoSora } from "@/src/data/talents/holo-jp-0-sora";
import { useEffect } from "react";

export default function TimelineSubscriberPage() {
  const ctx = useCtx();
  const dispatch = useDispatchCtx();

  const data = getTimelineData();

  useEffect(() => {
    const today = new Date(Date.UTC(2024, 4));
    dispatch({ type: "month", value: today.getMonth() });
    dispatch({ type: "year", value: today.getFullYear() });
  }, [dispatch]);

  const onFirst = () => {
    dispatch({ type: "month", value: TokinoSora.startDate.getMonth() });
    dispatch({ type: "year", value: TokinoSora.startDate.getFullYear() });
  };

  const onPrevious = () => {
    const date = new Date(ctx.year, ctx.month);
    date.setMonth(date.getMonth() - 1);
    const soraDate = new Date(
      TokinoSora.startDate.getFullYear(),
      TokinoSora.startDate.getMonth(),
    );
    if (date < soraDate) return;
    dispatch({ type: "month", value: date.getMonth() });
    dispatch({ type: "year", value: date.getFullYear() });
  };

  const onNext = () => {
    const today = new Date(Date.UTC(2024, 4));
    const date = new Date(ctx.year, ctx.month);
    date.setMonth(date.getMonth() + 1);
    if (date > today) return;
    dispatch({ type: "month", value: date.getMonth() });
    dispatch({ type: "year", value: date.getFullYear() });
  };

  const onLast = () => {
    const today = new Date(Date.UTC(2024, 4));
    dispatch({ type: "month", value: today.getMonth() });
    dispatch({ type: "year", value: today.getFullYear() });
  };

  return (
    <>
      <BackgroundTalent />
      <div className="mb-4 border-b pb-4 text-center">
        <h1>Hololive Subscriber Timeline</h1>
      </div>
      <div className="pb-20">
        <Timeline data={data} />
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
