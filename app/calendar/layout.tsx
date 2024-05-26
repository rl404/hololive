import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hololive Calendar",
  description: "Hololive talent birthday and anniversary calendar.",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
