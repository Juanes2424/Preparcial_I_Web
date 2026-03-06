"use client";

import { useState } from "react";

export default function CrearActor() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState(new Date().toISOString().split("T")[0]);  
  const [biography, setBiography] = useState("");

  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [duration, setDuration] = useState(0);
  const [country, setCountry] = useState("");
  const [releaseDate, setReleaseDate] = useState(new Date().toISOString().split("T")[0]);
  const [popularity, setPopularity] = useState(0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const actor = {
      name,
      photo,
      nationality,
      birthDate,
      biography
    };

    const movie = {
        title, poster, duration, country, releaseDate, popularity
    };
    
    const res1 = await fetch("http://localhost:3000/api/v1/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(movie)
    });

    console.log(res1);

    const res = await fetch("http://localhost:3000/api/v1/actors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(actor)
    });
    
    setName("");
    setPhoto("");
    setNationality("");
    setBirthDate("");
    setBiography("");

    setTitle("");
    setPoster("");
    setDuration(0);
    setCountry("");
    setReleaseDate("");
    setPopularity(0);
  };

  const etiqueta = {
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
      <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Crear Actor</h1>

      <form onSubmit={handleSubmit}>
        <h2>Info Pelicula</h2>
        <div>
          <label style={etiqueta}>Titulo</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Poster</label>
          <input type="text" value={poster} onChange={(e) => setPoster(e.target.value)} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Duration</label>
          <input type="number" value={duration} onChange={(e) => setDuration(parseFloat(e.target.value))} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Country</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Release date</label>
          <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Popularity</label>
          <input type="number" value={popularity} onChange={(e) => setPopularity(parseFloat(e.target.value))} style={inputs}/>
        </div>

        <h2>Info Actor: </h2>
        <div>
          <label style={etiqueta}>Nombre</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Photo</label>
          <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Nationality</label>
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Birth date</label>
          <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} style={inputs}/>
        </div>

        <div>
          <label style={etiqueta}>Biography</label>
          <textarea value={biography} onChange={(e) => setBiography(e.target.value)} style={inputs}/>
        </div>

        <button type="submit" style={boton}>Crear Actor</button>
      </form>
    </div>
  );
}