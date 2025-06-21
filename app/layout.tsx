import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Air Technic Services - Best HVAC Solutions in Mumbai',
  description: 'Professional HVAC services in Mumbai & Navi Mumbai. 20+ licensed technicians, 1000+ projects. Modern workshop, service center & office under one roof since 2014.',
  keywords: 'HVAC Mumbai, Air Conditioning Services, VRF Systems, Chiller Installation, HVAC Maintenance Mumbai',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}