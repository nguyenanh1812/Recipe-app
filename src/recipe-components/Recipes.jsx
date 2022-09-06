import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Recipes() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="container mt-4">
      <Button variant="success">New Recipe</Button>
      <h1 className="text-center">Please select a Recipe!</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center list-item flex-wrap border rounded p-2 bg-white text-black">
            <div className=" content">
              <h3>Hamburger</h3>
              <p>Hamburger</p>
            </div>
            <img
              src="https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg"
              alt=""
              width="100px"
            />
          </div>
        </div>
        <div className="col-md-6">
          <form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          >
            <input {...register("name")} placeholder="Name" />
            <input {...register("imageURL")} placeholder="Image URL" />
            <textarea {...register("description")} placeholder="Description" />
            <p>{data}</p>
            <button className="submit-add"> Add ingredient</button>
          </form>
        </div>
      </div>
    </div>
  );
}
