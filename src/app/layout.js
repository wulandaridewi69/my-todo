import './globals.css';
import { Inter } from 'next/font/google';

import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Activities',
  description: 'Progress of task completion',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
