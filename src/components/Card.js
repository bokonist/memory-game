import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import "../styles/Card.css";

function Card(props) {
  let cardData = props.cardData;
  let theme = useContext(ThemeContext);
  return (
    <div className={"card" + (theme ? "-dark" : "-light")}>
      <img
        alt={`${cardData.name}`}
        src={cardData.image}
        className={"card-image" + (theme ? "-dark" : "-light")}
      ></img>
      <p className={"card-info" + (theme ? "-dark" : "-light")}>
        {cardData.name}
      </p>
    </div>
  );
}

export { Card };