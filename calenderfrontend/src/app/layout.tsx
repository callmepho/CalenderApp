import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
export const metadata: Metadata = {
  title: "Calender App",
  description:
    "A fullstack Calender App with event planning made by Minh Anthony Tat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider withCssVariables withGlobalClasses>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
