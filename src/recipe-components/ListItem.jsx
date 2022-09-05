import React from "react";
import { useStore } from "react-redux";

export default function ListItem() {
  const store = useStore();
  console.log(this.state);
  return (
    <div>
      <div className="container">
        <form style={{padding:"50px 0"}}>
          <div className="row">
            <div className="col-6">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-2">
              <label for="amount" className="form-label">
                Amount
              </label>
              <input type="number" className="form-control" id="amount" />
            </div>
          </div>

          <div style={{marginTop:"10px"}}>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button type="submit" className="btn" style={{marginLeft:"10px" , background:"red",color:"white"}}>
              Delete
            </button>
            <button type="submit" className="btn" style={{marginLeft:"10px", background:"blue",color:"white"}}>
              Clear
            </button>
          </div>
        </form>
        <div>
          <ul>
            <li>dasjdhsadsa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
