import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import {
  App_DESCRIPTION,
  APP_NAME,
  NEXT_PUBLIC_SERVER_URL,
} from "@/lib/constants";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME,
  },
  description: App_DESCRIPTION,
  metadataBase: new URL(NEXT_PUBLIC_SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
