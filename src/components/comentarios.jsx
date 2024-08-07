/* eslint-disable react/prop-types */
import ".././App.css";
import { useEffect, useState } from "react";

export const Comentarios = ({ onComment }) => {
  const [comentarios, setComentarios] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await fetch(
          "https://renias--resenias--g97p59w7279j.code.run/api/comentarios"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComentarios(data.data.reverse());
      } catch (error) {
        console.error("Error fetching comentarios:", error);
      }
    };
    onComment(comentarios.length + 1);
    fetchComentarios();
  }, [onComment, comentarios]);

  const numberstar = (estrellas) => {
    const star = [];
    for (let i = 0; i < estrellas; i++) {
      star.push("../../star_complete.png");
    }
    for (let i = estrellas; i < 5; i++) {
      star.push("../../star.png");
    }
    return star;
  };

  useEffect(() => {
    const newStars = comentarios.map((comentario) =>
      numberstar(comentario.estrellas)
    );
    setStars(newStars);
  }, [comentarios]);
  return (
    <div>
      <h3>Comentarios</h3>
      <div>
        <ul className="ul-comments">
          {comentarios.map((comentario, index) => (
            <li key={comentario._id} className="comments">
              <div className="comment-header">
                <div className="comment-info">
                  <h3>{comentario.nombre}</h3>

                  {stars[index] &&
                    stars[index].map((star, i) => (
                      <div
                        key={comentario._id + comentario.nombre + i}
                        className="starcomment"
                      >
                        <img key={i} src={star} alt="" />
                      </div>
                    ))}
                </div>
                <p>{comentario.comentarios}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
