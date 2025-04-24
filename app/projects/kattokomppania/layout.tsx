import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kattokomppania Project | Milica Krivokapic",
  description: "Case study of the Kattokomppania website redesign project - A digital transformation for roofing services",
};

export default function KattokomppaniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}