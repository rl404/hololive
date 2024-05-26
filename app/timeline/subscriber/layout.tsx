import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hololive Subscriber Timeline",
  description: "Hololive talent subscriber timeline.",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
