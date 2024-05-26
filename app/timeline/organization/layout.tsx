import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hololive Organization Timeline",
  description: "Hololive organization structure timeline.",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
