
import './globals.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Suspense } from 'react'; // 1. استورد Suspense

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Nile | مساحة للقراءة والكتابة',
  description: 'اكتشف مقالات وأفكارًا ملهمة، وشارك معرفتك مع مجتمع Nile.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" className={cn("font-sans", geist.variable)}>
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