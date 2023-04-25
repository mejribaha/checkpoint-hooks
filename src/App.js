import "./App.css";
import { Data } from "./Datas";
import Nav from "./component/filter/Nav";
import MovieList from "./component/movieList/movieList";
import { useState } from "react";

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
      <MovieList search={search} star={star} movie={movie} />
    </div>
  );
}

export default App;
