import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map((actor, index) => (
    <div key={index}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
}

export default Actors;
