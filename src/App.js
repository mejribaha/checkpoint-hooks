import "./App.css";
import { Data } from "./Datas";
import Nav from "./component/filter/Nav";
import MovieList from "./component/movieList/movieList";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Trailer from "./component/moviDetails/Trailer"

function App() {
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(0);
  const[movie,setMovie]=useState(Data)
  return (
    <div className="App">
      <Nav
        setSearch={setSearch}
        setStar={setStar}
        movie={movie}
        setMovie={setMovie}
      />

      <Routes>
        <Route path="/movie/:id" element={<Trailer movie={movie}/>} />
        <Route
          path="/"
          element={<MovieList search={search} star={star} movie={movie} />}
        />
      </Routes>
    </div>
  );
}

export default App;
