"use client";
import "./globals.css";
import { Providers } from "@/redux/provider";
import MiniDrawer from "@/Layout/SideBar";
import { Notification } from "@/shared";
import { persistor } from "@/redux/store";
import { NextAuthProvider } from "./providers";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

// import { MiniDrawer } from "@/Layout/SideBar";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <PersistGate loading={null} persistor={persistor}>
            <NextAuthProvider>
              {/* {children} */}
              <>
                <MiniDrawer>{children}</MiniDrawer>
                <Notification />
              </>
            </NextAuthProvider>
          </PersistGate>
        </Providers>
      </body>
    </html>
  );
}
