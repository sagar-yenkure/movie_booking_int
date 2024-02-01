import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { show_context } from "../context";

const Movies_list = () => {
  const showstate = useContext(show_context);
  const { setshowsummery } = showstate;
  localStorage.setItem("user", "Sagar Yenkure");

  const naviagate = useNavigate();
  const [data, setdata] = useState([]);

  const fetchdata = async () => {
    try {
      const responce = await fetch(import.meta.env.VITE_API_KEY);
      const res = await responce.json();
      const show_array = res.map((item) => item.show);
      setdata(show_array);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <main>
        <div className="flex justify-center items-center p-5">
          <h1 className="font-bold text-2xl">THE MOVIE PLAYLIST</h1>
        </div>
        <div className="grid grid-cols-1 w-full md:w-fit md:grid-cols-3 lg:grid-cols-5 py-4 gap-5">
          {data.map((item) => {
            return (
          
              <div
                key={item.id}
                className="max-w-sm  border border-gray-200 rounded-lg shadow bg-[#54BD95]"
              >
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                    <h1>Language: {item.language}</h1>
                  </h5>

                  <p className="mb-3 font-normal text-black">
                   premiered on : {!item.premiered?"NA":item.premiered}
                  </p>
                  <a
                  target="_blank"
                    href={item.url}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                  <button
                    onClick={() => {
                      naviagate("/movie_summery");
                      setshowsummery(item);
                    }}
                    className="bg-green-500 rounded-lg px-4 py-2 mx-2 text-[#F8F8FA]"
                  >
                    View tickets
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Movies_list;
