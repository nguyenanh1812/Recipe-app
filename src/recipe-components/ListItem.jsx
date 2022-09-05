import React from "react";

export default function ListItem() {
  return (
    <div className="container mt-4">
      <div className="d-flex">
        <div className="w-50">
          <h5>Name</h5>
          <input className="w-100 ps-2" type="text" />
        </div>
        <div className="w-25 ms-3">
          <h5>Amount</h5>
          <input className="w-100" type="text" />
        </div>
      </div>
      <div>
        <div class="d-grid gap-2 d-md-block mt-3 mb-3">
          <button class="btn btn-primary btn-success" type="button">
            Add
          </button>
          <button class="btn btn-primary" type="button">
            Clear
          </button>
        </div>
      </div>
      <div className="border-top border-2">
        <p className="m-0 p-2 px-3 border border-top-0">Apple(5)</p>
        <p className="m-0 p-2 px-3 border border-top-0">Apple(5)</p>
      </div>
    </div>
  );
}
