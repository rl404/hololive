import { useCtx } from "../context";
import { TimelineData } from "./types";
import { subsSorter } from "./utils";
import { cn, compactInt, isActive, isRetired } from "@/src/libs/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Timeline({ data }: { data: TimelineData[] }) {
  const ctx = useCtx();

  const [talents, setTalents] = useState<TimelineData[]>(data);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const orderedTalents = [...data]
      .filter((t) => isActive(t, ctx.year, ctx.month, false))
      .sort(subsSorter(ctx.year, ctx.month));

    setTalents(
      data
        .filter((t) => isActive(t, ctx.year, ctx.month, false))
        .map((t) => ({
          ...t,
          order: orderedTalents.findIndex((v) => v.id === t.id) + 1,
        })),
    );
  }, [data, ctx.month, ctx.year]);

  useEffect(() => {
    setMax(
      data.reduce((max, talent) => {
        if (
          !talent.subscriber[ctx.year] ||
          !talent.subscriber[ctx.year][ctx.month]
        )
          return max;
        return Math.max(max, talent.subscriber[ctx.year][ctx.month]);
      }, 100000),
    );
  }, [data, ctx.month, ctx.year]);

  return (
    <div className="grid gap-2">
      <AnimatePresence>
        {talents.map((d) => (
          <TimelineTalent key={d.id} talent={d} max={max} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function TimelineTalent({
  talent,
  max,
}: {
  talent: TimelineData;
  max: number;
}) {
  const ctx = useCtx();
  const [subs, setSubs] = useState(0);

  useEffect(() => {
    setSubs(
      !talent.subscriber[ctx.year]
        ? 0
        : talent.subscriber[ctx.year][ctx.month] || 0,
    );
  }, [talent, ctx.month, ctx.year]);

  return (
    <motion.div
      layout
      className="flex items-center gap-4"
      style={{ order: talent.order || 9999 }}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      <motion.img
        key={talent.id}
        src={`/images/talents/${talent.id}/avatar.webp`}
        alt={talent.name}
        className={cn(
          "h-10 rounded-lg transition-all",
          isRetired(talent, ctx.year, ctx.month) && "grayscale",
        )}
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "auto" }}
        exit={{ opacity: 0, width: 0 }}
      />
      <motion.div
        className={cn(
          "h-1/2 rounded-r-lg",
          talent.bgColor,
          isRetired(talent, ctx.year, ctx.month) && "grayscale",
        )}
        animate={{ width: (subs * 100) / max + "%" }}
        initial={{ width: 0 }}
      />
      <div className="w-16 font-bold">{compactInt(subs)}</div>
    </motion.div>
  );
}
