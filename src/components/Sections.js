const Section = (props) => {
  return (
    <div
      className={`py-8 px-6 md:py-12 md:px-8 lg:py-16 lg:px-18 xl:px-24 font-sans ${props.className}`}
    >
      <div className={`${props.backgroundColor} p-8`}>
        <h1
          className={`mb-4 text-4xl underline decoration-solid font-semibold text-center text-blue-600 md:mb-6 lg:mb-8 md:text-5xl md:text-left lg:text-5xl xl:text-7xl `}
        >
          {props.sectionTitle}
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default Section;
