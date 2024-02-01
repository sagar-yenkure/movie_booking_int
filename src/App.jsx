import {
  Route,
  Routes
}
  from "react-router-dom";

import Header from "./components/Header"
import Movie_summery from "./components/Movie_summery";
import Movies_list from "./components/Movies_list"

function App() {


  return (
   <>
   <Header/>
   <Routes>
          <Route exact path='/' element={<Movies_list/>}></Route>
          <Route exact path='/movie_summery' element={<Movie_summery/>}></Route>
      </Routes>
   </>
  )
}

export default App
