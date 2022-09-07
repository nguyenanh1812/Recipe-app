import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, updateRecipe, removeRecipe } from "../redux/actions";
import { recipeListSelector } from "../redux/selectors";

export default function Recipes() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    imgURL: "",
  });
  const [displayForm, setDisplayForm] = useState(false);
  const [displayInput, setDisplayInput] = useState(false);
  const dispatch = useDispatch();
  const recipeList = useSelector(recipeListSelector);
  // console.log(recipeList);
  // const recipe = JSON.parse(data)

  const handelDisplay = () => {
    setDisplayForm(!displayForm);
  };
  const handelInput = () => {
    setDisplayInput(!displayInput);
  };

  const handleAddButtonClick = (a) => {
    const recipe = { id: uuidv4(), ...a };
    dispatch(addRecipe(recipe));
    // console.log('state id recipes',recipe);
  };

  useEffect(() => {
    console.log("state recipes", data);
  }, [data]);

  return (
    <div className="container mt-4">
      <Button variant="success" onClick={handelDisplay}>
        New Recipe
      </Button>
      <h1 className="text-center">Please select a Recipe!</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          {recipeList.map((recipe) => (
            <div
              key={recipe.id}
              className="d-flex justify-content-between align-items-center list-item flex-wrap border rounded p-2 bg-white text-black mb-4"
              style={{ minHeight: "100px", cursor: "pointer" }}
            >
              <div className=" content">
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
              </div>
              <img
                src={recipe.imgURL}
                alt={`img-recipe-${recipe.name}`}
                width="100px"
                style={{ maxWidth: "100px" }}
              />
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {displayForm && (
            <>
              <form
                onSubmit={handleSubmit((data) => {
                  setData(data);
                  handleAddButtonClick(data);
                })}
              >
                <div className="mb-2">
                  <Button
                    variant="success"
                    type="submit"
                    className="me-2"
                    // onClick={handleAddButtonClick(data)}
                  >
                    Save
                  </Button>
                  <Button variant="danger" type="reset">
                    Cancel
                  </Button>
                </div>
                <input {...register("name")} placeholder="Name" />
                <input {...register("imgURL")} placeholder="Image URL" />
                <textarea
                  {...register("description")}
                  placeholder="Description"
                />
              </form>
              {displayInput && (
                <div>
                  <input type="text" />
                  <input type="text" />
                </div>
              )}
              <button className="submit-add" onClick={handelInput}>
                Add ingredient
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
