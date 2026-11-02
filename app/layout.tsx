import './globals.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'


export default function layout({ children, }: { children: React.ReactNode }) {
  return (
    <div>
            <Navbar />
    
      {children}
      <Footer />
    </div>
  )
}



