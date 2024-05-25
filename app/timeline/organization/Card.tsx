import { useCtx } from "../context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { Group } from "@/src/data/types";
import { cn, isActive } from "@/src/libs/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function Card({ group }: { group: Group }) {
  const ctx = useCtx();
  return (
    <AnimatePresence>
      {isActive(group, ctx.year, ctx.month) && (
        <motion.div
          className={cn(
            "flex grow flex-col gap-2 rounded-lg border",
            group.bgColor,
            group.borderColor,
          )}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
        >
          <div
            className={cn(
              "rounded-t-lg text-center font-bold text-white",
              group.badgeColor,
              group.type !== "GEN" ? "p-2" : "p-0.5 text-sm",
            )}
          >
            {group.name}
          </div>
          {group.talents.filter((t) => isActive(t, ctx.year, ctx.month))
            .length > 0 && (
            <div className="flex h-full flex-wrap items-center justify-center gap-2 p-2">
              <AnimatePresence>
                {group.talents
                  .sort((a, b) => (a.startDate < b.startDate ? -1 : 1))
                  .filter((talent) => isActive(talent, ctx.year, ctx.month))
                  .map((talent) => (
                    <TooltipProvider key={talent.id} delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.img
                            src={`/images/talents/${talent.id}/avatar.webp`}
                            alt={talent.name}
                            className="h-10 rounded-lg"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                          />
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          {talent.name}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
              </AnimatePresence>
            </div>
          )}
          {group.groups.filter((g) => isActive(g, ctx.year, ctx.month)).length >
            0 && (
            <div className="flex flex-wrap gap-2 p-2">
              {group.groups.map((g, i) => (
                <Card
                  key={g.id + i}
                  group={{
                    ...g,
                    badgeColor: g.badgeColor || group.badgeColor,
                    bgColor: g.bgColor || group.bgColor,
                    borderColor: g.borderColor || group.borderColor,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
