
import './globals.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Suspense } from 'react'; // 1. استورد Suspense

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Nile',
  description: 'Nile is a web3 social media platform...',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head />
      <body>
        <NuqsAdapter>
          {/* 2. حط Navbar جوا Suspense عشان يحل مشكلة الـ Prerender */}
         
            <Suspense fallback={<div>Loading...</div>}>
  <Navbar />
</Suspense>
          
          
          {children}
          
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  )
}