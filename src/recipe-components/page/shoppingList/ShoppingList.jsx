import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  updateIngredient,
  removeIngredient,
} from "../../../redux/actions";
import { shoppingListSelector } from "../../../redux/selectors";
import ShoppingItem from "./ShoppingItem";

export default function ListItem() {
  const [item, setItem] = useState({
    name: "",
    quantity: 0,
  });
  const [displayBtn, setDisplayBtn] = useState(false);
  const dispatch = useDispatch();
  const shoppingList = useSelector(shoppingListSelector);

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
    dispatch(
      addIngredient({
        id: uuidv4(),
        ...item,
      })
    );
  };
  const handleClickItemOrder = (item) => {
    setItem(item);
    handelDisplay();
  };
  const handelDisplay = () => {
    setDisplayBtn(true);
  };
  const update = (item) => {
    dispatch(
      updateIngredient({
        ...item,
      })
    );
  };
  const remove = (item) => {
    dispatch(
      removeIngredient({
        ...item,
      })
    );
    setItem({
      name: "",
      quantity: 0,
    });
  };
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
              style={{ color: "black" }}
            />
          </div>
          <div className="w-25 ms-3">
            <h5>Amount</h5>
            <input
              className="w-100"
              type="number"
              value={item.quantity}
              onChange={handleChangeAmount}
              style={{ color: "black" }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex d-md-block mt-3 mb-3">
            {!displayBtn && (
              <button
                className="btn btn-primary btn-success"
                type="button"
                onClick={handleAddItem}
              >
                Add
              </button>
            )}
            {displayBtn && (
              <>
                <div
                  className="btn btn-success mx-3"
                  onClick={() => update(item)}
                >
                  Update
                </div>
                <div
                  className="btn btn-danger mx-3"
                  onClick={() => remove(item)}
                >
                  Delete
                </div>
              </>
            )}
            <div
              className="btn btn-primary mx-3"
              onClick={() => {
                setItem({
                  name: "",
                  quantity: 0,
                });
                setDisplayBtn(false);
              }}
            >
              Clear
            </div>
          </div>
        </div>
      </form>
      <div className="border-top border-2">
        {shoppingList.map((item) => (
          <ShoppingItem
            item={item}
            handleClickItemOrder={handleClickItemOrder}
          />
        ))}
      </div>
    </div>
  );
}
