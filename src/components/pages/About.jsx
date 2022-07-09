import abby from "../../assets/images/about/abby.jpg";

function About() {
  return (
<<<<<<< HEAD
    <div className="w-400 h-300 bg-red-100 flex items-center justify-center  xl:mx-64 lg:mx-32 md:mx-8 rounded-lg">
=======
    <div className="min-w-400 min-h-300 bg-red-100 flex items-center justify-center  xl:mx-64 lg:mx-32 md:mx-8  md:flex-row flex-col rounded-lg">
>>>>>>> refactor
      <div className="p-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        aspernatur, esse vero inventore harum exercitationem? Autem quia nisi
        fugiat, aliquam laborum amet sint cupiditate quam labore. Dignissimos
        temporibus non, voluptates cum ullam veniam quidem incidunt unde at
        blanditiis a minus fugit tenetur aliquid exercitationem sunt alias
      </div>
      <img
        src={abby}
        alt="photographer"
        className="md:rounded-r-lg md:mb-0 mb-8"
      />
    </div>
  );
}

export default About;
