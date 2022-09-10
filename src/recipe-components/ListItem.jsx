import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleDelete, handleUpdate } from "./redux/action";

export default function ListItem() {
  const list = useSelector((state) => state);
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    name: "",
    amount: "",
  });
  const [show, setShow] = useState(false);
  const handleClick = (a) => {
    console.log(a);
    setItem({
      name: a.name,
      amount: a.amount,
    });
    setShow(true);
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setItem({
        ...item,
        name: e.target.value,
      });
    } else {
      setItem({
        ...item,
        amount: e.target.value,
      });
    }
  };

  const handleAddItem = () => {
    console.log(item);
    dispatch(
      handleAdd({
        id: list.length + 1,
        ...item,
      })
    );
  };

  
  const handleDeleteItem = () => {
    dispatch(
      handleDelete({
        ...item,
      })
    );
  };

  const handleUpdateItem = () => {
    dispatch(
      handleUpdate({
        ...item,
      })
    );
  };

  return (
    <div>
      <div className="container">
        <form style={{ padding: "50px 0 20px 0" }}>
          <div className="row">
            <div className="col-6">
              <label
                htmlFor="name"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={item.name}
                onChange={(e) => handleChange(e)}
                name="name"
              />
            </div>
            <div className="col-2">
              <label
                htmlFor="amount"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                value={item.amount}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>
            {!show && (
              <div className="btn btn-success" onClick={handleAddItem}>
                Add
              </div>
            )}
            {show && (
              <>
                <div className="btn btn-success" onClick={handleUpdateItem}>Update</div>
                <div
                  className="btn btn-danger"
                  style={{ marginLeft: "10px", color: "white" }}
                  onClick={handleDeleteItem}
                >
                  Delete
                </div>
              </>
            )}

            <div
              className="btn btn-primary"
              style={{ marginLeft: "10px", color: "white" }}
              onClick={() => {
                setShow(false);
                setItem({
                  name: "",
                  amount: "",
                });
              }}
            >
              Clear
            </div>
          </div>
        </form>
        <div className="col-8">
          <ul className="m-0 p-0">
            {list.map((item) => (
              <li
                key={item.id}
                style={{
                  border: "1px solid GRAY",
                  listStyle: "none",
                  cursor: "pointer",
                }}
                className="p-2"
                onClick={() => handleClick(item)}
              >
                {item.name} {item.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
