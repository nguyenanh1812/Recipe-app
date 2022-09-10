import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  updateIngredient,
  removeIngredient,
} from "../../../redux/actions";
import { ShoppingListSelector } from "../../../redux/selectors";

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
    dispatch(
      addIngredient({
        id: uuidv4(),
        ...item,
      })
    );
  };

  const handleClickItemOrder = (a) => {
    // XỬ LÝ sao cho lấy được tất cả các thông tin của item (id,name.quantity)
    console.log(a);
    //Đẩy dữ liệu của item lên 2 thẻ input
    // khai báo 1 state boolean khi click thì set state là true => hiển thị danh sách nút(update, clear,delete) và dữ liệu item
    // Khi ấn nút clear thì set state là false
    // Update cậu có thể xem ở reducer redux làm tương tự add
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
            <button
              className="btn btn-primary btn-success"
              type="button"
              onClick={handleAddItem}
            >
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
          <div
            key={item.id}
            className="m-0 p-2 px-3 border border-top-0"
            onClick={(item) => handleClickItemOrder(item)}
          >
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