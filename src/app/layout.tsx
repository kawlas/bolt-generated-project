import React from 'react';
    import Header from '@/components/Header';

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <head>
            <title>Roofing Company</title>
          </head>
          <body className="font-sans antialiased">
            <Header />
            <main>{children}</main>
          </body>
        </html>
      );
    }
