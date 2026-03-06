"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Actor {
  id: string;
  name: string;
  photo: string;
  nationality: string;
  birthDate: string;
  biography: string;
}

export default function Actors() {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    async function fetchActors() {
      const res = await fetch("http://localhost:3000/api/v1/actors");
      const data = await res.json();
      setActors(data);
    }

    fetchActors();
  }, []);

  async function handleDelete(id: string) {
    await fetch(`http://localhost:3000/api/v1/actors/${id}`, {
      method: "DELETE"
    });

    setActors(actors.filter((actor) => actor.id !== id));
  }

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
              <p>{actor.name}</p>
              <p>{actor.nationality}</p>
              <p>{actor.birthDate}</p>

              <img src={actor.photo} alt={actor.name} width={200} />

              <br/>

              <Link href={`/editaractor/${actor.id}`}>
                <button
                  style={{
                    border: "1px solid black",
                    marginTop: "10px",
                    marginRight: "10px"
                  }}
                >
                  Editar
                </button>
              </Link>

              <button
                onClick={() => handleDelete(actor.id)}
                style={{
                  border: "1px solid black",
                  marginTop: "10px"
                }}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}