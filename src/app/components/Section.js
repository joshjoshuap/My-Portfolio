export default function Section({
  sectionTitle,
  id,
  titleColor,
  bgColor,
  titleIsCenter,
  children,
}) {
  return (
    <div className={bgColor}>
      <div className="w-11/12 py-16 mx-auto text-black xl:w-10/12" id={id}>
        <h1
          className={`mb-5 font-serif text-6xl font-bold text-center font ${titleColor} ${
            titleIsCenter == 'Yes' ? 'md:text-center' : 'md:text-left'
          }`}>
          {sectionTitle}
        </h1>
        {children}
      </div>
    </div>
  );
}
