"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditActor() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    async function fetchActor() {
      const res = await fetch(`http://localhost:3000/api/v1/actors/${id}`);
      const actor = await res.json();

      setName(actor.name);
      setPhoto(actor.photo);
      setNationality(actor.nationality);
      setBirthDate(actor.birthDate.split("T")[0]);
      setBiography(actor.biography);
    }

    if (id) fetchActor();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const actor = {
      name,
      photo,
      nationality,
      birthDate,
      biography
    };

    const res = await fetch(`http://localhost:3000/api/v1/actors/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(actor)
    });

    router.push("/actors");
  };

  const etiquetas = {
    display: "inline-block",
    width: "120px"
  };

  const inputs = {
    border: "1px solid black"
  };

  const boton = {
    border: "1px solid black",
    marginLeft: "120px",
    marginTop: "10px"
  };

  return (
    <div style={{ marginTop: "20px", marginLeft: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Editar Actor</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label style={etiquetas}>Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputs}
          />
        </div>

        <div>
          <label style={etiquetas}>Photo</label>
          <input
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            style={inputs}
          />
        </div>

        <div>
          <label style={etiquetas}>Nationality</label>
          <input
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            style={inputs}
          />
        </div>

        <div>
          <label style={etiquetas}>Birth date</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            style={inputs}
          />
        </div>

        <div>
          <label style={etiquetas}>Biography</label>
          <textarea
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            style={inputs}
          />
        </div>

        <button type="submit" style={boton}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}