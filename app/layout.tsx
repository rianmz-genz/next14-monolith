import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import './globals.css';

const unbounded = Unbounded({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={unbounded.className}>{children}</body>
    </html>
  );
}
