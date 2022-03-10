import React from "react";

const Register = () => {
  return (
    <section id="AuthBlock" className="w-4/5 m-auto h-screen">
      <article className="flex justify-center items-center h-screen bg-white flex-col ">
        <h2>Register</h2>
        <form className="bg-white shadow-md min-h-[50%] w-1/4 p-5 mt-4">
          <div className="my-2">
            <label className="block py-2">Username</label>
            <input
              type="text"
              placeholder="enter username"
              className="block py-2 px-2 rounded-sm border-2 border-gray-100 w-full"
            />
          </div>
          <div className="my-2">
            <label className="block py-2">Email</label>
            <input
              type="text"
              placeholder="enter email"
              className="block py-2 px-2 rounded-sm border-2 border-gray-100 w-full"
            />
          </div>
          <div className="my-2">
            <label className="block py-2">Password</label>
            <input
              type="password"
              placeholder="enter password"
              className="block py-2 px-2 rounded-sm border-2 border-gray-100 w-full"
            />
          </div>
          <div className="my-2">
            <label className="block py-2"> Confirm Password</label>
            <input
              type="password"
              placeholder="enter password"
              className="block py-2 px-2 rounded-sm border-2 border-gray-100 w-full"
            />
          </div>
          <button
            className="bg-slate-600 text-white hover:
                    bg-slate-800 w-full p-3 rounded-md"
          >
            submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default Register;
