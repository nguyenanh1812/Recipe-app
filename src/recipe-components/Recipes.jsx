import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Recipes() {
  return (
    <div className='container position-relative'>
      <Button variant="success" className='mt-4'>Secondary</Button>
      <h1 className='position-absolute start-50'>Please select a Recipe!</h1>
      <div className="d-flex justify-content-between list-item w-25 border rounded p-2 mt-5">
        <div className=" content">
          <h3>Hamburger</h3>
          <p>Hamburger</p>
        </div>
        <img src="https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg" alt="" width="100px" />
      </div>
    </div>
  )
}
