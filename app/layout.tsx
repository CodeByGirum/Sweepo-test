// app/layout.tsx or app/layout.jsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Amplify } from "aws-amplify";
import awsconfig from '../aws-exports';

// Configure Amplify only once
Amplify.configure(awsconfig);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sweepo.ai - AI-Powered Data Cleaning",
  description: "Clean and refine your data with AI intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
