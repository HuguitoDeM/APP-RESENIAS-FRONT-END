/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";
import ".././App.css";
import { Comentarios } from "../components/comentarios";
import { Rating } from "../components/rating";
export const Home = ({ nombre }) => {
  const url = "https://renias--resenias--g97p59w7279j.code.run/api/comentarios";
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleComentarios = (newComentarios) => {
    setComentario(newComentarios);
  };
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const mostrarAlerta = () => {
    Swal.fire({
      title: "¡Listo!",
      text: "El mensaje ha sido enviado",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  const handleSubmit = async (event) => {
    if (inputValue.length > 0) {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: comentario,
          nombre: nombre,
          comentarios: inputValue.replace(/\s+/g, " ").trim(""),
          estrellas: rating,
        }),
      };
      mostrarAlerta();
      event.preventDefault();
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
      } catch (e) {
        return e;
      }
    }
  };

  return (
    <div className="container">
      <h1 className="titles">Sofa 2 metros</h1>
      <img
        className="imagenSofa"
        src="https://i.pinimg.com/564x/8b/2a/6c/8b2a6c9cd3191ed108baac63cad6350d.jpg"
        alt="imagen de un sofa"
      />
      <h2 className="titles">Producto en venta</h2>
      <h2 className="titles">$5000</h2>
      <h2 className="titles">Descripción</h2>
      <p className="description">
        Sofá minimalista de 3 cuerpos Estructura reforzada, telas de exelente
        calidad Enviamos a todos el país Somos fabricantes, consulte
        disponibilidad antes de su compra
      </p>
      <label className="titles comentarioTitle" htmlFor="comentario">
        Comentar sobre el producto
      </label>
      <form onSubmit={handleSubmit}>
        <textarea
          className="inputComentario"
          type="area"
          placeholder="Escribe tu comentario..."
          id="comentario"
          value={inputValue}
          onChange={handleChange}
        />
        <Rating onRatingChange={handleRatingChange} />
        <button className="buttonComentario" type="submit">
          Comentar
        </button>
      </form>
      <Comentarios onComment={handleComentarios} />
    </div>
  );
};
