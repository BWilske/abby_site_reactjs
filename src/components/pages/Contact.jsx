import React from "react";
import { FbLogo, IgLogo, EmailLogo } from "../../assets/svg";
import ContactForm from "../layout/ContactForm";
import camera from "../../assets/images/contact/camera.jpg";

function Contact() {
  return (
    <div className="flex items-center justify-center px-16 lg:flex-row flex-col gap-x-32 py-16 ">
      <div className="bg-primary min-w-2xl max-w-4xl justify-center items-center flex md:flex-col rounded-lg shadow-2xl ring-2 ring-slate-600 gap-12 p-12 font-typewriter text-3xl lg:mb-0 mb-16">
        <a href="https://www.facebook.com/heartswindowphotography">
          <div className="flex justify-center items-center gap-4 ">
            <span>
              <FbLogo width="36"></FbLogo>
            </span>
            <p className=" hidden md:block">Facebook</p>
          </div>
        </a>
        <a href="https://www.instagram.com/hearts_window_photography/">
          <div className="flex justify-center items-center gap-4">
            <span>
              <IgLogo width="36"></IgLogo>
            </span>
            <p className=" hidden md:block">Instagram</p>
          </div>
        </a>
        <a href="mailto:heartswindowphotographer@gmail.com">
          <div className="flex justify-center items-center gap-4 ">
            <span>
              <EmailLogo width="36"></EmailLogo>
            </span>
            <p className="hidden md:block">Email</p>
          </div>
        </a>
      </div>
      {/* <div className="flex flex-col flex-1 w-auto my-8 gap-y-8 ">
        <div className="bg-slate-200  mr-auto px-48 py-24 ring-2 ring-slate-600 rounded-xl">
        test
        </div>
        <div className="bg-slate-200  ml-auto px-48 py-24 ring-2 ring-slate-600 rounded-xl">
        test
        </div>
        <div className="bg-slate-200  mr-auto px-48 py-24 ring-2 ring-slate-600 rounded-xl">
        test
        </div>
      </div> */}
      {/* <img src={camera} alt="" className="opacity-80 ring-slate-600 ring-2 " /> */}
      <ContactForm></ContactForm>
    </div>
  );
}

export default Contact;
