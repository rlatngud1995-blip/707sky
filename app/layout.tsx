import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "707스카이 | 서울·경기·인천 스카이차",
  description:
    "서울·경기·인천 스카이차 전문 707스카이. 1톤, 2.5톤, 3.5톤, 4.5톤, 5톤 스카이차 작업 상담.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
