// These styles apply to every route in the application
import './globals.css';
import {Providers} from "./providers";
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className="bg-eggplant min-h-screen" >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}