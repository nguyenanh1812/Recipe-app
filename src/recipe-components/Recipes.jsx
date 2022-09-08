import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, updateRecipe, removeRecipe } from "../redux/actions";
import { recipeListSelector, ShoppingListSelector } from "../redux/selectors";

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
  const [img, setImg] = useState("")
  const [amount,setAmount] = useState([])
  const dispatch = useDispatch();
  const recipeList = useSelector(recipeListSelector);
  const ingredientList = useSelector(ShoppingListSelector);
  // ingredientList => map taoj ra mang co dl con oject{name:ingredient.name, amount: 0 }
  // object.amount laf value cua input ingredient
  // onChange cua input ingredient se set lai value cua mang dl vua tao voi gia tri amount thay doi theo input ingredient
  console.log(ingredientList)

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
  const handleChangeAmout= (e)=>{
  setAmount(e.target.value)
  }
const handleClickIngredient = (e) =>{

}
// dung useRef de phan biet cac input Igredent voi gia tri ref truyen vao id 
// handle truyen vao gia tri ref (id) khi an vao se an di display = none
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
                <input {...register("imgURL")} placeholder="Image URL" onChange={e => setImg(e.target.value)} />
                {img && <img src={img} alt="" width="200px" className="mb-3" />}

                <textarea
                  {...register("description")}
                  placeholder="Description"
                />
              </form>
              {displayInput && (
                <div>
                  {ingredientList.map(item => (
                    <div key={item.id}>
                      {item.quantity &&
                        <div className="d-flex mb-3 gap-3 justify-content-between">
                          <input className="mb-0 w-75 bg-white" type="text" value={item.name} disabled />
                          <input className="mb-0 w-25" type="number" name="" id="" value={amount} onChange= {handleChangeAmout} />
                          <Button variant="danger" onClick={handleClickIngredient}>
                            X
                          </Button>
                        </div>
                      }
                    </div>

                  ))}
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
