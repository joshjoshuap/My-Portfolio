import Link from 'next/link';

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center text-xl gap-1 p-5">
      <p>&copy; Copyright {currentYear} | </p>
      <Link href="https://www.joshjoshuap.site/">Build by Joshua Pautanes</Link>
    </footer>
  );
}
