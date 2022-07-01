import React from "react";

function Contact() {
  return (
    <div className="flex">
      <div className="bg-primary p-16">
        <ol className="">
          <li>Facebook</li>
          <li></li>
          <li>instagram</li>
          <li></li>
        </ol>
      </div>
      <div className="flex flex-col ml-auto  ">
        <div className=" bg-primary form-control ">
          <input className="textarea w-96 h-64"></input>
        </div>
        <div className="bg-primary w-64 h-96">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, repellendus magnam sit nobis ducimus corporis vel rem
            non ea assumenda debitis, incidunt laboriosam aut minus iusto?
            Dolorum nam delectus error magni maiores aspernatur quia ipsum,
            earum soluta labore mollitia ipsa nemo eius animi architecto tenetur
            cupiditate expedita est harum quaerat!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
