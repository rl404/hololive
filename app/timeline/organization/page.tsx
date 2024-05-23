"use client";

import BackgroundTalent from "../BackgroundTalent";
import Control from "../Control";
import { useCtx, useDispatchCtx } from "../context";
import Card from "./Card";
import { CoverCorp } from "@/src/data/companies/cover";
import { Indie } from "@/src/data/companies/indie";
import { Signal } from "@/src/data/groups/signal";
import { useEffect } from "react";

export default function TimelineOrganizationPage() {
  const ctx = useCtx();
  const dispatch = useDispatchCtx();

  useEffect(() => {
    const today = new Date(Date.UTC(2024, 4));
    dispatch({ type: "month", value: today.getMonth() });
    dispatch({ type: "year", value: today.getFullYear() });
  }, [dispatch]);

  const onFirst = () => {
    dispatch({ type: "month", value: CoverCorp.startDate.getMonth() });
    dispatch({ type: "year", value: CoverCorp.startDate.getFullYear() });
  };

  const onPrevious = () => {
    const date = new Date(ctx.year, ctx.month);
    date.setMonth(date.getMonth() - 1);
    const coverDate = new Date(
      CoverCorp.startDate.getFullYear(),
      CoverCorp.startDate.getMonth(),
    );
    if (date < coverDate) return;
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
        <h1>Hololive Organization Timeline</h1>
      </div>
      <div className="flex gap-2 pb-20">
        <Card group={CoverCorp} />
        <Card group={Signal} />
        <Card group={Indie} />
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
