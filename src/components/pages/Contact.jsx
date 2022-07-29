import React from "react";
import ContactForm from "../layout/ContactForm";
import AlternateContactLinks from "../layout/AlternateContactLinks";

function Contact() {
  return (
    <div className=" flex justify-center flex-col items-center p-12 lg:flex-row ">
      <AlternateContactLinks />
      <ContactForm />
    </div>
  );
}

export default Contact;
