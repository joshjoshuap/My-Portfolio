const Section = (props) => {
  return (
    <div className="py-8 px-6 md:py-12 md:px-12 lg:py-16 lg:px-28">
      <h1 className="text-blue-600 text-4xl text-center font-semibold md:text-5xl md:text-left lg:text-7xl">
        {props.sectionTitle}
      </h1>
      {props.children}
    </div>
  );
};

export default Section;
