import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Whozh8 - Modern Multimedia Developer',
  description: 'Portfolio of Whozh8, a modern multimedia developer showcasing innovative work in 3D, animations, and interactive experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}