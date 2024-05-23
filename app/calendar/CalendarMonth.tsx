import { MonthData } from "./types";
import { DayNames, MonthNames } from "@/src/const";
import { Talents } from "@/src/data/talents/talents";
import { cn, isRetired } from "@/src/libs/utils";

export default function CalendarMonth({ month }: { month: number }) {
  const today = new Date();
  const year = today.getFullYear();

  const dayOne = new Date(Date.UTC(year, month, 1)).getDay();
  const lastDate: number = new Date(Date.UTC(year, month + 1, 0)).getDate();
  const lastDay: number = new Date(Date.UTC(year, month, lastDate)).getDay();
  const lastDateLastMonth: number = new Date(
    Date.UTC(year, month, 0),
  ).getDate();

  let data: MonthData[] = [];

  for (let i = dayOne; i > 0; i--) {
    data = [
      ...data,
      {
        date: lastDateLastMonth - i + 1,
        spillOver: true,
        birthday: [],
        anniversary: [],
      },
    ];
  }

  for (let i = 1; i <= lastDate; i++) {
    data = [
      ...data,
      {
        date: i,
        spillOver: false,
        birthday: Talents.filter((talent) => {
          if (!talent.birthdayDate) return false;
          return (
            talent.birthdayDate.getDate() === i &&
            talent.birthdayDate.getMonth() === month
          );
        }),
        anniversary: Talents.filter((talent) => {
          return (
            talent.startDate.getDate() === i &&
            talent.startDate.getMonth() === month
          );
        }),
      },
    ];
  }

  for (let i = lastDay; i < 6; i++) {
    data = [
      ...data,
      {
        date: i - lastDay + 1,
        spillOver: true,
        birthday: [],
        anniversary: [],
      },
    ];
  }

  return (
    <div className="grid grid-cols-7 gap-2 rounded-lg border border-border p-2 text-center">
      <h2 className="col-span-7 font-bold">
        {MonthNames[month]} {year}
      </h2>
      {DayNames.map((d, i) => (
        <div
          key={d}
          className={cn(
            "text-muted-foreground",
            (i === 0 || i === DayNames.length - 1) && "text-red-400",
          )}
        >
          {d}
        </div>
      ))}
      <div className="col-span-7 h-px bg-border" />
      {data.map((d) => (
        <div
          key={d.date}
          id={
            today.getMonth() === month && today.getDate() === d.date
              ? "today"
              : ""
          }
          className={cn(
            "relative flex aspect-square size-36 flex-wrap items-center justify-center gap-2 rounded-lg bg-accent p-2",
            d.spillOver && "opacity-30",
            today.getMonth() === month &&
              today.getDate() === d.date &&
              "animate-pulse outline outline-red-500",
          )}
        >
          <div className="absolute left-0 top-0 p-2">{d.date}</div>
          {d.birthday.map((talent) => (
            <div
              key={talent.id}
              className="rounded-lg outline outline-blue-500"
            >
              <img
                src={`/images/talents/${talent.id}/avatar.webp`}
                alt={talent.name}
                className={cn(
                  "h-10 rounded-lg",
                  isRetired(talent, year, month) && "grayscale",
                )}
              />
            </div>
          ))}
          {d.anniversary.map((talent) => (
            <div
              key={talent.id}
              className="rounded-lg outline outline-green-500"
            >
              <img
                key={talent.id}
                src={`/images/talents/${talent.id}/avatar.webp`}
                alt={talent.name}
                className={cn(
                  "h-10 rounded-lg",
                  isRetired(talent, year, month) && "grayscale",
                )}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
