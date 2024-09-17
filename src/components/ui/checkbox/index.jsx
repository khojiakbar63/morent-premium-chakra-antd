import React, { useState } from "react";
import "./style.scss"; // Import the CSS file
import UncheckedHeart from '../../../assets/icons/card-heart.svg'
import CheckedHeart from '../../../assets/icons/red-heart.svg'



export const Checkbox = () => {


    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
      setChecked(!checked);
    };



  return (
    <label className="image-checkbox">
    <input
      type="checkbox"
      checked={checked}
      onChange={handleCheckboxChange}
    />
    <img
      src={checked ? CheckedHeart : UncheckedHeart}
      alt="heart"
      className="heart-img"
    />
  </label>
  );
};


