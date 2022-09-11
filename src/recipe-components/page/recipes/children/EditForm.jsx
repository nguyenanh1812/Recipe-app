import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import IngredientList from "./IngredientList";

export default function EditForm({ addNewRecipe, recipe, updateRecipe }) {
  const { register, handleSubmit } = useForm();
  const [orderList, setOrderList] = useState([1]);
  const [img, setImg] = useState("");
  const [data, setData] = useState({
    id: '',
    name: "",
    description: "",
    imgURL: "",
    ingredients: [],
  });

  useEffect(() => {
    if (recipe) {
      setData(recipe);
      setImg(recipe.imgURL);
    }
  }, []);

  const handleAddButtonClick = (recipe) => {
    addNewRecipe({ ...recipe, ingredients: orderList.filter((e) => e.name) });
  };

  const handleAddIngredient = () => {
    if (orderList[orderList.length - 1].name || orderList.length === 0) {
      console.log(1);
      return setOrderList([...orderList, { name: "", quantity: 1 }]);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          setData(data);
          console.log('data',data);
          recipe ? updateRecipe(data) : handleAddButtonClick(data);
        })}
      >
        <div className="mb-2">
          <Button variant="success" type="submit" className="me-2">
            {recipe ? "Update" : "Save"}
          </Button>
          <Button
            variant="danger"
            type="reset"
            onClick={() => setOrderList([])}
          >
            Cancel
          </Button>
        </div>
        <input
          className="text-black"
          {...register("name")}
          placeholder="Name"
          defaultValue={data.name}
        />
        <input
          className="text-black"
          {...register("imgURL")}
          placeholder="Image URL"
          defaultValue={data.imgURL}
          onChange={(e) => setImg(e.target.value)}
        />
        {img && <img src={img} alt="" width="200px" className="mb-3" />}
        <textarea
          className="text-black"
          {...register("description")}
          placeholder="Description"
          defaultValue={data.description}
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
