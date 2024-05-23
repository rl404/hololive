"use client";

import CalendarMonth from "./CalendarMonth";
import { MonthNames } from "@/src/const";
import { scrollToID } from "@/src/libs/utils";

export default function CalendarPage() {
  return (
    <>
      <div className="mb-4 border-b pb-4 text-center">
        <h1>Hololive Birthday & Anniversary Calendar</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {MonthNames.map((_, i) => (
          <CalendarMonth key={i} month={i} />
        ))}
      </div>
      <div className="fixed bottom-0 right-0 flex flex-col gap-4 p-4 text-center">
        <button
          className="rounded-lg px-2 py-1 outline outline-red-500 transition hover:bg-red-100"
          onClick={() => scrollToID("today", "center")}
        >
          Today
        </button>
        <div className="rounded-lg px-2 py-1 outline outline-blue-500">
          Birthday
        </div>
        <div className="rounded-lg px-2 py-1 outline outline-green-500">
          Anniversary
        </div>
      </div>
    </>
  );
}
