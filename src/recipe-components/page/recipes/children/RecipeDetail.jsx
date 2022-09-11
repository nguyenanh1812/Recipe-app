import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ({ recipe, deleteRecipe, setDisplayForm, setRecipe, setdataRecipe }) {
  const [show, setShow] = useState(false);
  const { Option } = Select;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = ({ value }) => {
    console.log(value);
    if (value === "editRecipe") {
      setDisplayForm(true);
      setRecipe(false);
      setdataRecipe(recipe)
    } else if (value === "deleteRecipe") {
      handleShow();
    }
  };

  return (
    <>
      <div>
        <img src={recipe.imgURL} alt="" className="w-50 h-50" />
        <h3 className="text-white">{recipe.name}</h3>
        <Select
          className="rounded"
          labelInValue
          defaultValue={{
            value: "",
            label: "Manage Recipe",
          }}
          style={{
            width: 200,
            marginBottom: 15,
          }}
          onChange={handleChange}
        >
          <Option value="toShoppingList">
            <Link to="/shopping-list" style={{ color: "inherit" }}>
              To ShoppingList
            </Link>
          </Option>
          <Option value="editRecipe">Edit Recipe</Option>
          <Option value="deleteRecipe">Delete Recipe</Option>
        </Select>
        <h5 className="text-white">{recipe.description}</h5>
        <div
          className="border border-2 border-white rounded"
          style={{ overflow: "hidden" }}
        >
          {recipe.ingredients.map((item, index) => (
            <div key={index} className="border border-white text-white p-2">
              {item.name} {item.quantity}
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">Delete Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black">
          Are you sure you want to delete recipe {recipe.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              deleteRecipe(recipe);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
