import { useCtx, useDispatchCtx } from "../context";
import { TimelineGroupData, YearMonth } from "./types";
import { Badge } from "@/src/components/ui/badge";
import { MonthNames } from "@/src/const";
import { cn, isActive } from "@/src/libs/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

export function Timeline({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
}

export function TimelineYear({
  yearMonth,
}: Readonly<{ yearMonth: YearMonth }>) {
  const ctx = useCtx();
  return (
    <tr>
      {Object.entries(yearMonth).map((v) => (
        <td
          key={v[0]}
          colSpan={v[1].length}
          className="sticky top-20 z-10 bg-background px-4"
        >
          <h2
            className={
              ctx.year === parseInt(v[0]) ? "" : "text-muted-foreground"
            }
          >
            <span className="sticky left-1/2">{v[0]}</span>
          </h2>
        </td>
      ))}
    </tr>
  );
}

export function TimelineMonths({
  yearMonth,
}: Readonly<{ yearMonth: YearMonth }>) {
  return (
    <tr>
      {Object.entries(yearMonth).map((v) =>
        v[1].map((m) => (
          <TimelineMonth key={v[0] + m} year={parseInt(v[0])} month={m} />
        )),
      )}
    </tr>
  );
}

export function TimelineMonth({
  year,
  month,
}: Readonly<{ year: number; month: number }>) {
  const ctx = useCtx();
  const dispatch = useDispatchCtx();

  const ref = useRef<HTMLTableCellElement>(null);

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
    <td
      ref={ref}
      id={`${MonthNames[month]}-${year}`}
      className={cn("sticky top-28 z-10 bg-background px-4")}
    >
      <h3
        className={cn(
          "w-80 border-b-4 border-blue-500 pb-4 transition",
          !(ctx.month === month && ctx.year === year) && "opacity-50",
        )}
      >
        <span className="sticky left-1/2">{MonthNames[month]}</span>
      </h3>
    </td>
  );
}

export function TimelineGroup({
  group,
}: Readonly<{ group: TimelineGroupData }>) {
  const ctx = useCtx();
  return (
    <AnimatePresence>
      {isActive(group, ctx.year, ctx.month) && (
        <motion.tr
          className="h-11"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {group.colSpanBefore > 0 && <td colSpan={group.colSpanBefore} />}
          <td colSpan={group.colSpan} className="relative pl-4">
            <div className="sticky left-0 flex w-fit items-center gap-2 px-2">
              <div className="flex w-40 flex-col items-center gap-2">
                <Badge
                  className={cn(
                    "line-clamp-1 break-all",
                    group.badgeColor,
                    group.type !== "GEN" && "text-sm",
                  )}
                >
                  {group.name}
                </Badge>
              </div>
              <AnimatePresence>
                {group.talents
                  .filter((talent) => isActive(talent, ctx.year, ctx.month))
                  .map((talent) => (
                    <motion.img
                      key={talent.id}
                      src={`/assets/images/talents/${talent.id}/avatar.webp`}
                      alt={talent.name}
                      className="h-10 rounded-lg"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                    />
                  ))}
              </AnimatePresence>
            </div>
            <div
              className={cn(
                "absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center px-4",
              )}
            >
              <div
                className={cn(
                  "w-full",
                  group.badgeColor,
                  group.type !== "GEN" ? "h-2" : "h-0.5",
                )}
              />
            </div>
          </td>
          {group.colSpanAfter > 0 && <td colSpan={group.colSpanAfter} />}
        </motion.tr>
      )}
    </AnimatePresence>
  );
}
