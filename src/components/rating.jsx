/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ".././App.css";
export const Rating = ({ onRatingChange }) => {
  const [star, setStar] = useState([]);

  const replaceStar = (index, newValue) => {
    setStar((prevStars) =>
      prevStars.map((star, i) => (i === index ? newValue : star))
    );
  };

  const InitialStars = () => {
    const newStars = [];
    for (let i = 0; i < 5; i++) {
      newStars.push("../../star.png");
    }
    setStar(newStars);
  };

  useEffect(() => {
    InitialStars();
  }, []);
  function stars(numberStarts) {
    onRatingChange(numberStarts);
    switch (numberStarts) {
      case 1:
        for (let i = 0; i < numberStarts; i++) {
          replaceStar(i, "../../star_complete.png");
        }
        break;
      case 2:
        for (let i = 0; i < numberStarts; i++) {
          replaceStar(i, "../../star_complete.png");
        }
        break;
      case 3:
        for (let i = 0; i < numberStarts; i++) {
          replaceStar(i, "../../star_complete.png");
        }
        break;
      case 4:
        for (let i = 0; i < numberStarts; i++) {
          replaceStar(i, "../../star_complete.png");
        }
        break;
      case 5:
        for (let i = 0; i < numberStarts; i++) {
          replaceStar(i, "../../star_complete.png");
        }
        break;
    }
    for (let i = numberStarts; i < 5; i++) {
      replaceStar(i, "../../star.png");
    }
  }
  return (
    <div className="stars">
      <div className="star5">
        <div onClick={() => stars(1)}>
          <img src={star[0]} className="star1" alt="" />
        </div>
        <div onClick={() => stars(2)}>
          <img src={star[1]} className="star2" alt="" />
        </div>
        <div onClick={() => stars(3)}>
          <img src={star[2]} className="star3" alt="" />
        </div>
        <div onClick={() => stars(4)}>
          <img src={star[3]} className="star4" alt="" />
        </div>
        <div onClick={() => stars(5)}>
          <img src={star[4]} className="star5" alt="" />
        </div>
      </div>
    </div>
  );
};
