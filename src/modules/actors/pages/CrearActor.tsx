"use client";

import { useState } from "react";

export default function CrearActor() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState(new Date().toISOString().split("T")[0]);  
  const [biography, setBiography] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const actor = {
      name,
      photo,
      nationality,
      birthDate,
      biography
    };
    
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