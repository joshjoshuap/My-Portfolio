const Section = (props) => {
  return (
    <div
      className={`py-8 px-6 md:py-12 md:px-8 lg:py-16 lg:px-18 xl:px-24 ${props.className}`}
    >
      <h1 className="text-blue-600 text-4xl text-center font-semibold mb-4 md:mb-6 lg:mb-8 md:text-5xl md:text-left lg:text-5xl">
        {props.sectionTitle}
      </h1>
      {props.children}
    </div>
  );
};

export default Section;
