import Image from "next/image";
import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex items-center" href='/'>
          <Image
            width={50}
            height={50}
            alt="Picture of the author"
            src="/image-removebg-preview (19).png"
          ></Image>
          <span href="/" className="text-xl">
            TodoList
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"/about"} className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href={"/todos"} className="mr-5 hover:text-gray-900">
            Your Todos
          </Link>
          <Link href={"/contact"} className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
