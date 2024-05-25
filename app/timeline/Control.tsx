import { useCtx } from "./context";
import { Button } from "@/src/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/src/components/ui/tooltip";
import { MonthNames } from "@/src/const";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { useCallback, useEffect } from "react";

export default function Control({
  onFirst,
  onPrevious,
  onNext,
  onLast,
}: {
  onFirst: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onLast: () => void;
}) {
  const ctx = useCtx();

  const arrowKeyHandler = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          onFirst();
          break;
        case "ArrowDown":
          onLast();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onFirst, onPrevious, onNext, onLast],
  );

  useEffect(() => {
    window.addEventListener("keydown", arrowKeyHandler);
    return () => {
      window.removeEventListener("keydown", arrowKeyHandler);
    };
  }, [arrowKeyHandler]);

  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-2 p-4">
      <div className="absolute top-1/2 -z-50 h-full w-full items-center border-t border-border bg-background" />
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={onFirst}
            >
              <DoubleArrowLeftIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>go to the first month</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={onPrevious}
            >
              <ChevronLeftIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>go to previous month</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-32">
              {MonthNames[ctx.month]} {ctx.year}
            </Button>
          </TooltipTrigger>
          <TooltipContent>you can also use arrow key to move</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={onNext}
            >
              <ChevronRightIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>go to next month</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={onLast}
            >
              <DoubleArrowRightIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>go to the last month</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
