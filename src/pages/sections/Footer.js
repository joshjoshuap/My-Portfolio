const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="flex justify-center gap-10 bg-neutral-900 text-neutral-50 text-xl p-5">
      <p>&copy; Copyright {year} </p>
      <p>
        <a href="https://joshjoshuap.vercel.app/" className="border-b-4 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out" target="_blank" rel='noreferrer'>
          Build By: Joshua Pautanes
        </a>
      </p>
    </footer>
  );
};

export default Footer;