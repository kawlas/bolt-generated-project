import React from 'react';
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="pl">
          <head>
            <title>TOP DEKARZ - Twój Partner w Dachach</title>
          </head>
          <body className="font-sans antialiased">
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      );
    }
