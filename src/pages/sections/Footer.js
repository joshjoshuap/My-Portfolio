const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center bg-gray-900 text-neutral-50 text-xl p-5 gap-2 mt-10 md:flex md:flex-row md:justify-center md:gap-10">
      <p>&copy; Copyright {currentYear} </p>
      <p>
        <a
          href="https://www.joshjoshuap.site/"
          className="border-b-4 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noreferrer"
        >
          Build By: Joshua Pautanes
        </a>
      </p>
    </footer>
  );
};

export default Footer;
