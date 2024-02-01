import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { show_context } from "../context";
import Movie_Form from "./Movie_Form";
import { useNavigate } from "react-router-dom";



const Movie_summery = () => {
  const navigate=useNavigate()
  const showstate = useContext(show_context);
  const { showsummery ,modal,setmodal} = showstate;
  


  return (
    <main>
      <button className="pl-3" onClick={()=>navigate(-1)}>&larr; back</button>
      <div className=" flex justify-center relative items-center">
        <h1 className="font-bold text-4xl p-5">{showsummery?.name}</h1>
      </div>
      <div className="poster w-full h-full flex p-5">
        <img className="w-fit h-fit" src={showsummery?.image?.medium} alt={showsummery?.name} />
        <div className="p-3 space-x-3">
          <span className="textbold text-xl ">
            Ratings: {showsummery?.rating.average}
          </span>
          <span className="textbold text-xl ">
            genres: {showsummery?.genres[0]},{showsummery?.genres[1]}
          </span>
          <span className="textbold text-xl ">
            premiered on :{showsummery?.premiered}
          </span>

          <div className="py-10">
            <p>Summery : {showsummery?.summary}</p>
          </div>
          <a className="text-blue-800" target="_blank" href={showsummery?.url}>
            read more
          </a>
          <button onClick={()=>setmodal(true)} className="bg-[#54BD95] rounded-lg px-2 py-2 ">
            Book Movie
          </button>
        </div>
      </div>
    <div className={`form ${modal?"visible":"hidden"} absolute top-0   md:right-[40%]`}>
      <Movie_Form data={showsummery}/>
    </div>
    </main>
  );
};

export default Movie_summery;
