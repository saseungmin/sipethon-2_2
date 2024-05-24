import clsx from 'clsx';

import ClientProvider from '@/components/ClientProvider';
import Layout from '@/components/Layout';

import { pretendardFont } from './_fonts';

import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={clsx(pretendardFont.className, 'light')}>
      <body>
        <ClientProvider>
          <Layout>
            {children}
          </Layout>
        </ClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
