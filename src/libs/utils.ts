import { Group, Talent } from "../data/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToID(
  id: string,
  block = "nearest" as ScrollLogicalPosition,
) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    block: block,
    inline: "center",
  });
}

export const getMonthDiff = (startDate: Date, endDate: Date): number => {
  let monthDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  monthDiff -= startDate.getMonth() + 1;
  monthDiff += endDate.getMonth() + 1;
  return monthDiff <= 0 ? 0 : monthDiff;
};

export const isActive = (
  data: Talent | Group,
  year: number,
  month: number,
  excludeRetired = true,
): boolean => {
  if (data.startDate.getFullYear() > year) return false;
  if (excludeRetired && data.endDate && data.endDate.getFullYear() < year)
    return false;

  const start =
    data.startDate.getFullYear() < year ||
    (data.startDate.getFullYear() === year &&
      data.startDate.getMonth() <= month);
  const end =
    !data.endDate ||
    (data.endDate &&
      (data.endDate.getFullYear() > year ||
        (data.endDate.getFullYear() === year &&
          data.endDate.getMonth() > month)));

  return excludeRetired ? start && end : start;
};

export const isRetired = (
  data: Talent | Group,
  year: number,
  month: number,
): boolean => {
  if (!data.endDate) return false;
  return (
    data.endDate.getFullYear() < year ||
    (data.endDate.getFullYear() === year && data.endDate.getMonth() <= month)
  );
};

const si = [
  { v: 1e3, s: "K" },
  { v: 1e6, s: "M" },
  { v: 1e9, s: "B" },
  { v: 1e12, s: "T" },
  { v: 1e15, s: "P" },
  { v: 1e18, s: "E" },
];

export const compactInt = (n: number) => {
  const num = n.toString().replace(/[^0-9.]/g, "");
  if (n < 1000) {
    return num;
  }

  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (n >= si[index].v) {
      break;
    }
  }
  return (
    (n / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s
  );
};
