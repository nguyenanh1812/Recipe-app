import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { shoppingListSelector } from "../../../../redux/selectors";

const { Option } = Select;
function Ingredient() {
  const ingredientList = useSelector(shoppingListSelector);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    quantity: 0,
  });
  const handleChangeNewIngredient = (e) => {
    if (e.target.name === "quantity") {
      setNewIngredient({
        ...newIngredient,
        quantity: e.target.value,
      });
    } else if (e.target.data === "name") {
      console.log("hihi");
    }
  };
  return (
    <div className="d-flex mb-3 gap-3 justify-content-between">
      <Select
        showSearch
        className="w-75 h-100"
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => option.children.includes(input)}
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      >
        {ingredientList.map((item) => (
          <Option
            key={item.id}
            value={item.name}
            data="name"
            onChange={handleChangeNewIngredient}
          >
            {item.name}
          </Option>
        ))}
      </Select>
      <input
        style={{ color: "black" }}
        className="mb-0 w-25 h-75"
        type="number"
        name="quantity"
        value={newIngredient.quantity}
        onChange={handleChangeNewIngredient}
      />
      <Button variant="danger" className="h-75">
        X
      </Button>
    </div>
  );
}

export default Ingredient;
