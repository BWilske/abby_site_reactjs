import React from "react";
import { useState } from "react";

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event, setSuccessMessage) => {
    event.preventDefault();
    const formElements = [...event.currentTarget.elements];

    const filledOutElements = formElements
      //this is the only part i dont understand, need to research
      .filter((elem) => !!elem.value)
      .map(
        (element) =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value)
      )
      .join("&");
    setSuccessMessage("Submitting ...");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements,
    })
      .then(() => {
        setSuccessMessage("Successfully submitted!");
      })
      .catch((_) => {
        setSuccessMessage(
          "There was an error with your submission, please try agin or email me diretly using the link to the left"
        );
      });
  };

  return (
    <form
      className="flex flex-col form-control p-8 max-w-4xl min-w-2xl bg-primary gap-4 rounded-lg shadow-2xl ring-2 ring-slate-600 text-2xl font-typewriter"
      name="contact"
      method="POST"
      action="/contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={(e) => handleSubmit(e, setSuccessMessage)}
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
        readOnly={true}
      ></input>

      <label htmlFor="first">
        First Name{" "}
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full max-w-s h-16 font-sans text-xl"
          name="First"
          id="first"
          required={true}
        ></input>
      </label>
      <label htmlFor="last">
        Last Name{" "}
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full max-w-s h-16 font-sans text-xl"
          name="Last"
          id="last"
          required={true}
        />
      </label>
      <label htmlFor="email">
        Email{" "}
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-s h-16 font-sans  text-xl"
          name="Email"
          id="email"
          required={true}
        />
      </label>
      <label htmlFor="first name">
        Telephone (Optional){" "}
        <input
          type="tel"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-s h-16 font-sans  text-xl"
          name="Phone"
          id="phone"
          //COME BACK AND SPRUCE UP PHONE NUMBER ENTRY
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </label>
      <label htmlFor="phototype">
        Type{" "}
        <select
          className="select select-bordered w-full max-w-s font-sans  text-xl"
          name="PhotoType"
          id="phototype"
        >
          {/* <option defaultValue={{disabled:yes}}>
          Type of Photography
        </option> */}
          <option>Wedding</option>
          <option>Senior</option>
          <option>Family</option>
          <option>Baby</option>
          <option>Other</option>
        </select>
      </label>

      <button
        type="submit"
        name="SendMessage"
        className="btn btn-lg bg-zinc-300 text-black mt-8 text-3xl"
      >
        Send
      </button>
      {successMessage && <p className="font-typewriter">{successMessage}</p>}
    </form>
  );
}

export default ContactForm;
