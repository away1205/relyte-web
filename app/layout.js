import { Plus_Jakarta_Sans, Urbanist } from 'next/font/google';
import GoogleAnalytics from './_components/GoogleAnalytics';
import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});
const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

export const metadata = {
  title: 'Relyte - Website for Architect',
  description:
    'Relyte Space is a website design and development specialize in Architectural website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className={urbanist.className}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
