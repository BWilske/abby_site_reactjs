import { FbLogo, IgLogo, EmailLogo } from "../../assets/svg";

function AlternateContactLinks() {
  return (
    <div className=" flex justify-center items-center bg-primary min-h-fit gap-12 p-12 mb-12 font-typewriter text-3xl ring-2 ring-slate-600 rounded-lg shadow-2xl lg:mr-16 lg:mb-0 md:flex-col ">
      <a href="https://www.facebook.com/heartswindowphotography">
        <div className="flex justify-center items-center ">
          <span>
            <FbLogo width="36"></FbLogo>
          </span>
          <p className="hidden md:block ml-4">Facebook</p>
        </div>
      </a>
      <a href="https://www.instagram.com/hearts_window_photography/">
        <div className="flex justify-center items-center ">
          <span>
            <IgLogo width="36"></IgLogo>
          </span>
          <p className=" hidden md:block ml-4">Instagram</p>
        </div>
      </a>
      <a href="mailto:heartswindowphotographer@gmail.com">
        <div className="flex justify-center items-center  ">
          <span>
            <EmailLogo width="36"></EmailLogo>
          </span>
          <p className="hidden md:block ml-4">Email</p>
        </div>
      </a>
    </div>
  );
}

export default AlternateContactLinks;
