import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni Of The Sacreds",
  description: "Sacred Heart English Medium HSS Alumni Association",
};

export default function Template({ children }: { children: React.ReactNode }) {
  return children;
}