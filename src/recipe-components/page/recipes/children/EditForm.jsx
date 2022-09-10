import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import IngredientList from "./IngredientList";

export default function EditForm({ addNewRecipe }) {
  const { register, handleSubmit } = useForm();
  const [orderList, setOrderList] = useState([1]);
  const [img, setImg] = useState("");
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    imgURL: "",
    ingredients: [],
  });

  const handleAddButtonClick = (recipe) => {
    addNewRecipe({ ...recipe, ingredients: orderList.filter((e) => e.name) });
  };

  const handleAddIngredient = () => {
    if (orderList[orderList.length - 1].name || orderList.length===0) {
      console.log(1);
      return setOrderList([...orderList, {name: '', quantity: 1}]);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          setData(data);
          handleAddButtonClick(data);
        })}
      >
        <div className="mb-2">
          <Button variant="success" type="submit" className="me-2">
            Save
          </Button>
          <Button
            variant="danger"
            type="reset"
            onClick={() => setOrderList([])}
          >
            Cancel
          </Button>
        </div>
        <input {...register("name")} placeholder="Name" />
        <input
          {...register("imgURL")}
          placeholder="Image URL"
          onChange={(e) => setImg(e.target.value)}
        />
        {img && <img src={img} alt="" width="200px" className="mb-3" />}

        <textarea
          {...register("description")}
          placeholder="Description"
          style={{ color: "black" }}
        />

        <div>
          <IngredientList orderList={orderList} setOrderList={setOrderList} />
        </div>
      </form>
      <button className="submit-add" onClick={handleAddIngredient}>
        Add ingredient
      </button>
    </>
  );
}
