import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Ingredient({ item, handleClickIngredient}) {
  const [amount, setAmount] = useState(0);
  const handleChangeAmout = (e) => {
    setAmount(e.target.value);
  };
  //Truyền dữ liệu item.name và amount sang recipes
  return (
    <div className="d-flex mb-3 gap-3 justify-content-between">
      <input
        className="mb-0 w-75 bg-white"
        type="text"
        value={item.name}
        disabled
      />
      <input
        className="mb-0 w-25"
        type="number"
        name=""
        id=""
        value={amount}
        onChange={handleChangeAmout}
      />
      <Button variant="danger" onClick={handleClickIngredient}>
        X
      </Button>
    </div>
  );
}
