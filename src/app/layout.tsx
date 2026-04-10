import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "FreelanceTimer - Smart Time Tracking & Invoicing",
  description: "Track your freelance hours and generate professional invoices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
