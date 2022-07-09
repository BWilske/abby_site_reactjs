import abby from "../../assets/images/about/abby.jpg";

function About() {
  return (
    <div className="w-400 h-300 bg-red-100 flex items-center justify-center  xl:mx-64 lg:mx-32 md:mx-8 rounded-lg">
      <div className="p-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        aspernatur, esse vero inventore harum exercitationem? Autem quia nisi
        fugiat, aliquam laborum amet sint cupiditate quam labore. Dignissimos
        temporibus non, voluptates cum ullam veniam quidem incidunt unde at
        blanditiis a minus fugit tenetur aliquid exercitationem sunt alias
        vitae, autem explicabo saepe quo doloribus! Ipsa enim asperiores ab,
        culpa similique eveniet vitae, repudiandae necessitatibus minima
        explicabo magnam. Ipsa, quaerat incidunt. Error, dolorem neque
        blanditiis ad alias eius quo quas quam? Veniam quod qui voluptatem ab
        vel provident itaque dignissimos, iusto modi dolore ipsum neque dolorem
        ipsam sequi nam illo in cumque ad.
      </div>
      <img src={abby} alt="photographer" className="rounded-r-lg" />
    </div>
  );
}

export default About;
