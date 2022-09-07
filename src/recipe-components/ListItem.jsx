import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  updateIngredient,
  removeIngredient,
} from "../redux/actions";
import { ShoppingListSelector } from "../redux/selectors";

export default function ListItem() {
  const [item, setItem] = useState({
    name: "",
    quantity: 0,
  });
  const dispatch = useDispatch();
  const ShoppingList = useSelector(ShoppingListSelector);

  const handleChangeAmount = (event) => {
    setItem({
      ...item,
      quantity: event.target.value,
    });
  };

  const handleChangeName = (event) => {
    setItem({
      ...item,
      name: event.target.value,
    });
  };

  const handleAddItem = () => {
    dispatch(addIngredient({
      id: uuidv4(),
      ...item,
    }))
  }

  return (
    <div className="container mt-4">
      <form>
        <div className="d-flex">
          <div className="w-50">
            <h5>Name</h5>
            <input
              className="w-100 ps-2"
              type="text"
              placeholder="Type name"
              value={item.name}
              onChange={handleChangeName}
            />
          </div>
          <div className="w-25 ms-3">
            <h5>Amount</h5>
            <input
              className="w-100"
              type="number"
              value={item.quantity}
              onChange={handleChangeAmount}
            />
          </div>
        </div>
        <div>
          <div className="d-flex d-md-block mt-3 mb-3">
            <button className="btn btn-primary btn-success" type="button" onClick={handleAddItem}>
              Add
            </button>
            <button className="btn btn-primary mx-3" type="reset">
              Clear
            </button>
          </div>
        </div>
      </form>
      <div className="border-top border-2">
        {ShoppingList.map((item) => (
          <div key={item.id} className="m-0 p-2 px-3 border border-top-0">
            <p
              style={{
                cursor: "pointer",
                margin: "10px 0",
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              {item.name} ({item.quantity})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
