import React from 'react'

export default function ListItem() {
  return (
    <div className = " container">
      <div className = "d-flex">
        <div className = "w-50">
        <h5 >Name</h5>
        <input className=" w-100" type="text" />
        </div>
        <div className = " w-25 ms-3">
        <h5>Amount</h5>
        <input className=" w-100" type="text" />
        </div>
      </div>
      <div>
        <div class="d-grid gap-2 d-md-block mt-3 mb-3">
          <button class="btn btn-primary btn-success" type="button">Add</button>
          <button class="btn btn-primary" type="button">Clear</button>
        </div>
      </div>
      <div>
        <input className=" w-100" type="text" placeholder='Apple(5)' /> <br />
        <input className=" w-100" type="text" placeholder='Tomatoes (10)' /> <br />
        <input className=" w-100" type="text" placeholder='Staek(1)' /><br />
        <input className=" w-100" type="text" placeholder='Bread(1)' /><br />
        <input className=" w-100" type="text" placeholder='Phở(100)' /><br />
        <input className=" w-100" type="text" placeholder='Bò(50)' /> <br />
      </div>
    </div>
  )
}
