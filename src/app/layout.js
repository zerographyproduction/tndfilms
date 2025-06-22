import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TND Films - Video Production Company',
  description:
    'Transform visions into reality through the art of video production. Documentaries, Short Films, Music Videos, Brand Videos, Corporate Videos, and Commercials.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
