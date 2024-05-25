import { useCtx } from "./context";
import { Talents } from "@/src/data/talents/talents";
import { isActive } from "@/src/libs/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundTalent() {
  const ctx = useCtx();
  return (
    <div className="fixed left-0 top-0 -z-10 flex h-screen w-screen items-center justify-center p-4">
      <div className="flex max-w-7xl flex-wrap items-center justify-center">
        <AnimatePresence>
          {Talents.filter((talent) =>
            isActive(talent, ctx.year, ctx.month),
          ).map((talent) => (
            <motion.div
              key={talent.id}
              className="flex size-20 items-center justify-center"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "5rem" }}
              exit={{ opacity: 0, width: 0 }}
            >
              <motion.img
                src={`/images/talents/${talent.id}/model-main.webp`}
                alt={talent.name}
                className="h-60 max-w-none object-cover"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="fixed left-0 top-0 h-full w-full bg-background opacity-85" />
    </div>
  );
}
