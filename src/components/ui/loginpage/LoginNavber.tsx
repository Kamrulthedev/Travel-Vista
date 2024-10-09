/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const LoginNavbar = () => {
  return (
    <nav className=" px-8 py-4">
      <Link href={"/"}>
        <div className="text-white text-lg font-bold cursor-pointer items-center space-x-2">
          <span className="ml-2 font-serif text-2xl text-black">Travel</span>
          <img
            src="https://i.ibb.co.com/Jymd0MB/around-9041439.png"
            alt="Logo"
            className="w-10 h-10 inline-block"
          />
          <span className="ml-2 font-serif text-2xl text-black">
            Vista
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default LoginNavbar;
