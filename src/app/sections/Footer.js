import Link from 'next/link';

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center gap-1 p-5 text-xl text-center md:flex-row">
      <p>&copy; Copyright {currentYear} | </p>
      <Link href="https://www.joshjoshuap.site/">Build by Joshua Pautanes</Link>
    </footer>
  );
}
