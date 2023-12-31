import './globals.css';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Gabarito } from 'next/font/google';

const fontSans = Gabarito({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Volton',
  description: 'Empower Your Business With Volton AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${fontSans.variable} font-sans`}>
      <body
        className={` dark:bg-black bg-white scrollbar-thin scrollbar-thumb-[#DCE4FF] scrollbar-thin-rounded-md scrollbar-track-white  `}
      >
        {children}
        <ToastContainer position='bottom-right' />
      </body>
    </html>
  );
}
