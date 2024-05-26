import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hololive Talent Timeline",
  description: "Hololive talent debut and retirement timeline.",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
