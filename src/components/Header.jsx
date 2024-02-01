import React from "react";

const Header = () => {
  return (
    <header className="flex w-full justify-between p-5 bg-transparent">
      <div className="log w-[5rem] md:w-[20rem]  flex justify-center items-center">
        <h1 className="text-[#54BD95] text-3xl font-bold">Movie_Maza</h1>
      </div>
      <section className=" flex space-x-16 justify-center items-center">
        <nav className="hidden md:block">
          <ul className="Navtext flex space-x-5 justify-center items-center hover:cursor-pointer">
            <li>Product</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="space-x-4 flex">
          {/* <button className="Navtext">login</button> */}
          <button className="bg-red-400 rounded-lg px-2 py-2 text-[#F8F8FA]">Log Out</button>
        </div>
      </section>
      
    </header>
  );
};

export default Header;
