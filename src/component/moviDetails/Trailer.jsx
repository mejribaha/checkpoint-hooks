import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Trailer.css";
import { Data } from "../../Datas";

const Trailer = ({ movie }) => {
  const navigate = useNavigate();

  let { id } = useParams();
  const [details, setDetails] = useState(Data);
  useEffect(() => {
    setDetails(movie.filter((movie) => movie.id === id)[0]);

    return () => {};
  }, [id,movie]);
  const home = () => {
    navigate("/");
  };

  return (
    <div className="dir">
      <iframe
        width="100%"
        height="600"
        src={details.Trailer}
        title={details.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h1 className="dt">{details.Title}</h1>
      <h2 className="desc">{details.Desription}</h2>
      <Button className="bt" variant="warning" onClick={home}>
        GO BACK
      </Button>
    </div>
  );
};

export default Trailer;
