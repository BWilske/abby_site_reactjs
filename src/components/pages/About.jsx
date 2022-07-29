import abby from "../../assets/images/misc/about/abby.jpg";

function About() {
  return (
    <div className="min-w-400 min-h-300 bg-red-100 ring-2 ring-slate-300 items-center justify-center  xl:mx-64 lg:mx-32 md:mx-8 flex lg:flex-row flex-col rounded-lg ">
      <article className="py-8 px-16 font-typewriter ">
        <h1 className="text-2xl mb-8">
          {" "}
          A small town photographer helping families capture memories.
        </h1>
        <p className="mb-8">
          Olalla born and raised, ive always had a passion for capturing
          emotions. When I was barely kneehigh my parents presented me with a
          camera for Christmas. That camera would come out evey family gathering
          with a fresh roll of film to be filled with family, friends, food, and
          fun.
        </p>
        <p className="mb-8">
          When it was time to start looking for colleges, I wanted to find a
          program where my love of photography and people could flourish.
          Central Washington University allowe me to challenge myself and push
          the limits of my photography. Graduateding in the fall of 2017 with a
          degree in Fine Art, ive continued to strive to capture the same
          emotions I saw looking through that old film camera all of those years
          ago.
        </p>
        <h1 className="text-2xl">I sincerely hope that im able to help you</h1>
      </article>
      <img
        src={abby}
        alt="photographer"
        className="md:rounded-lg lg:mb-0 mb-8"
      />
    </div>
  );
}

export default About;
