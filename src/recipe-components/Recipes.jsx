import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Recipes() {
  return (
    <div className='container mt-4'>
      <Button variant="success">New Recipe</Button>
      <h1 className='text-center'>Please select a Recipe!</h1>
      <hr />
      <div className="d-flex justify-content-between align-items-center list-item flex-wrap border rounded p-2 mt-5 w-25" >
        <div className=" content">
          <h3>Hamburger</h3>
          <p>Hamburger</p>
        </div>
        <img src="https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg" alt="" width="100px" />
      </div>
    </div>
  )
}