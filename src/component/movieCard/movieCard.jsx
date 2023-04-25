import React from "react";
import "./moviCard.css";
import ReactStars from "react-stars";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function movieCard(props,i) {
  return (
    <div className="cards">
      <Card key={i}>
        <Card.Img variant="top" src={props.movie.Photo} style={{ height: "30rem" }} />
        <Card.Body style={{ height: "30rem" }}>
          <Card.Title style={{ fontSize: "2rem" }}>{props.movie.Title}</Card.Title>
          <br />
          <Card.Subtitle>
            <p style={{ fontSize: "1.3rem", color: "black" }}>Category:</p>
            {props.movie.Category}
          </Card.Subtitle>
          <br />
          <Card.Subtitle>
            <p style={{ fontSize: "1.3rem", color: "black" }}>Rating :</p>
            <ReactStars
              count={10}
              size={24}
              color2={"#ffd700"}
              half={false}
              value={props.movie.Rating}
            />
          </Card.Subtitle>
          <br />
          <Card.Subtitle>
            <p style={{ fontSize: "1.3rem", color: "black" }}>Cast:</p>
            {props.movie.Cast}
          </Card.Subtitle>
          <br />
          <Card.Subtitle>
            <p style={{ fontSize: "1.3rem", color: "black" }}>Date Realised:</p>
            {props.movie.Date}
          </Card.Subtitle>
          <br />

          <Button variant="primary">Show Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default movieCard;
