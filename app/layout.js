import Navbar, { SmallNavbar } from '@/components/Navbar';
import './globals.css';
import Navscore from '@/components/Navscore';

export const metadata = {
  title: 'zuAI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-100">
        <Navbar />
        <SmallNavbar />
        <div className="md:ml-[110px]">{children}</div>
        <div className="hidden md:block">
          <Navscore />
        </div>
      </body>
    </html>
  );
}
