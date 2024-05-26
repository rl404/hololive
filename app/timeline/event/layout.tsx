import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hololive Event Timeline",
  description: "Hololive event timeline.",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
