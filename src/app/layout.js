import './globals.css';

export const metadata = {
  title: 'Joshua Pautanes - Potfolio',
  description: 'My personal website and portfolio. Know more about me and lets talk',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Google Font*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Quicksand:wght@400;600&display=swap"
          rel="stylesheet"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;700&display=swap"
          rel="stylesheet"></link>
      </head>
      <body className="font-sans bg-white">{children}</body>
    </html>
  );
}
