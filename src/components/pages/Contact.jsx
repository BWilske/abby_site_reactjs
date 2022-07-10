import React from "react";
import { FbLogo, IgLogo, EmailLogo } from "../../assets/svg";

function Contact() {
  return (
    <div className="flex gap-16 items-center justify-center">
      <div className="bg-primary min-w-fit justify-center items-center flex flex-col rounded-lg shadow-2xl ring-2 ring-slate-300">
        <a href="https://www.facebook.com/heartswindowphotography">
          <div className="flex my-8 justify-center items-center gap-4 px-16">
            <span>
              <FbLogo width="36"></FbLogo>
            </span>
            <p className="font-typewriter text-3xl ">Facebook</p>
          </div>
        </a>
        <a href="https://www.instagram.com/hearts_window_photography/">
          <div className="flex my-8 justify-center items-center gap-4 px-16">
            <span>
              <IgLogo width="36"></IgLogo>
            </span>
            <p className="font-typewriter text-3xl">Instagram</p>
          </div>
        </a>
        <a href="mailto:heartswindowphotographer@gmail.com">
          <div className="flex my-8 justify-center items-center gap-4 px-16">
            <span>
              <EmailLogo width="36"></EmailLogo>
            </span>
            <p className="font-typewriter text-3xl">Email</p>
          </div>
        </a>
      </div>
      <form
        className="flex flex-col form-control p-16 bg-primary gap-8"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full max-w-xs"
          name="First"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full max-w-xs"
          name="Last"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          name="Email"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
          name="Phone"
        />
        <select
          className="select select-bordered w-full max-w-xs"
          name="Photo_Type"
        >
          <option disabled selected>
            Type of Photography
          </option>
          <option>Wedding</option>
          <option>Senior</option>
          <option>Family</option>
          <option>Baby</option>
          <option>Other</option>
        </select>

        <button className="btn btn-lg bg-zinc-300 text-black">Send</button>
      </form>
    </div>
  );
}

export default Contact;
