"use client";

import { useEffect, useState } from "react";

interface Actor {
  id: string;
  title: string;
  releaseDate: string;
  director?: object;
  prizes?: object;
}

export default function Movies() {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    async function fetchActors() {
      const res = await fetch("http://localhost:3000/api/v1/movies");
      const data = await res.json();
      setActors(data);
    }

    fetchActors();
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginTop: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Actors</h1>

      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <div
              style={{
                border: "2px solid turquoise",
                padding: "10px",
                margin: "10px 0",
                display: "inline-block"
              }}
            >
              <p>{actor.title}</p>
              <p>{actor.releaseDate}</p>
              {actor.prizes ? <p>actor.prizes</p> : <></>}
              {actor.director ? <p>actor.director</p> : <></>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}