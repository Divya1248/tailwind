import React from "react";

const Nav = () => {
  return (
    <section id="navBlock" className="bg-orange-500 h-16">
      <article className="w-4/5 m-auto h-16 flex justify-between items-center">
        <div className="w-1/2">
          <div className="logo text-white text-xl font-bold hover:text-gray-300">
            Qspiders
          </div>
        </div>
        <div className="w-1/2 flex justify-end ">
          <div className="menu">
            <nav>
              <ul className="flex items-center list-none text-white uppercase">
                <li>
                  <a href="" className="no-underline text-white px-5 uppercase">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="no-underline text-white px-5 uppercase">
                    Services
                  </a>
                </li>
                <li>
                  <a href="" className="no-underline text-white px-5 uppercase">
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="no-underline text-white px-5 uppercase bg-orange-900 rounded-md p-2 hover:bg-orange-300"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Nav;
