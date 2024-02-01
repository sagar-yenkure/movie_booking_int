import React, { useContext } from "react";
import { show_context } from "../context";

const Movie_Form = (props) => {
  const showstate = useContext(show_context);
  const { setmodal } = showstate;
  const { name, language } = props.data;
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[30rem]">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="movie"
        >
          Movie Name
        </label>
        <input
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="movie"
          type="text"
          Value={name}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="Language"
        >
          Movie Language
        </label>
        <input
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Language"
          type="text"
          Value={language}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          User Name
        </label>
        <input
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          Value={localStorage.getItem("user")}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Confirm Booking
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setmodal(false);
          }}
        >
          close
        </button>
      </div>
    </form>
  );
};

export default Movie_Form;
