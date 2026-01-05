import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Playwright Testing | Milica Krivokapic",
  description: "My journey learning Playwright - building smoke tests for this portfolio to develop automated testing skills.",
};

export default function PlaywrightTestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
