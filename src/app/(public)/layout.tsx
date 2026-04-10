import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FreelanceTimer - Legal",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
