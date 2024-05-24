import { useCtx, useDispatchCtx } from "../context";
import { TimelineEventData } from "./types";
import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { MonthNames } from "@/src/const";
import { EventColor, EventString } from "@/src/data/types";
import { cn, scrollToID } from "@/src/libs/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

export function Timeline({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ul className="flex items-start gap-2">{children}</ul>;
}

export function TimelineYear({
  year,
  children,
}: Readonly<{ year: number; children: React.ReactNode }>) {
  const ctx = useCtx();
  return (
    <li>
      <h2 className={ctx.year === year ? "" : "opacity-50"}>
        <span className="sticky left-1/2">{year}</span>
      </h2>
      <ul className="flex items-start gap-2">{children}</ul>
    </li>
  );
}

export function TimelineMonth({
  className,
  year,
  month,
  children,
}: Readonly<{
  className?: string;
  year: number;
  month: number;
  children: React.ReactNode;
}>) {
  const ctx = useCtx();
  const dispatch = useDispatchCtx();

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const mid = window.innerWidth / 2;
      const el = ref.current.getBoundingClientRect();
      const elWidth = el.width;
      const elLeft = el.left;

      if (elLeft <= mid && elLeft + elWidth >= mid) {
        dispatch({ type: "month", value: month });
        dispatch({ type: "year", value: year });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, month, year]);

  return (
    <li
      ref={ref}
      id={`${MonthNames[month]}-${year}`}
      className={cn(
        "grid w-80 gap-2 transition hover:opacity-100",
        className,
        !(ctx.month === month && ctx.year === year) && "opacity-50",
      )}
    >
      <h3>
        <span className="sticky left-1/2">{MonthNames[month]}</span>
      </h3>
      <div className="flex items-center gap-2">
        <div>
          <div className="size-4 rounded-full bg-blue-500" />
        </div>
        <div className="h-1 w-full bg-blue-500" />
      </div>
      {children}
    </li>
  );
}

export function TimelineEvent({
  event,
}: Readonly<{ event: TimelineEventData }>) {
  const [show, setShow] = useState(false);

  const toggle = () => {
    scrollToID(event.id);
    setShow(!show);
  };

  return (
    <Card
      id={event.id}
      onClick={toggle}
      className="cursor-pointer hover:bg-accent"
    >
      <CardHeader>
        <CardTitle className="flex flex-col gap-1">
          <span>{event.name}</span>
          <div className="flex gap-1">
            <Badge className={event.badgeColor}>{event.sourceName}</Badge>
            <Badge className={EventColor[event.type]}>
              {EventString[event.type]}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className={!show ? "hidden" : ""}>
        <p>{event.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2 text-muted-foreground">
        <CalendarIcon className="size-5" />
        <p>{event.date.toISOString().slice(0, 10)}</p>
      </CardFooter>
    </Card>
  );
}
