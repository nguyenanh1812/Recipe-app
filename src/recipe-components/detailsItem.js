import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../app/store'

export default function DetailsItem() {
  const details = store.getState().details[0]
  const [editForm, setEditForm] = useState(false)
  const btnEditForm = () => {
    setEditForm(true)
  }

  const shoppingList = (e) => {
    e.prevenDefault()
  }

  const addIngredient = () => {
    const details = store.getState().details[0]
  }
  return (
    <>
      <div className='mb-3'>
        <img className='w-100' src={details?.img} alt='' />
      </div>
      <div>
        <h3>{details?.name}</h3>
      </div>
      <div className='mb-3'>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Recipe
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={(e) => shoppingList(e)}><Link className="dropdown-item" to="/list-item">To Shopping List</Link></li>
            <li onClick={() => btnEditForm()}><Link className="dropdown-item" to="#">Edit ReciPe</Link></li>
            <li><Link className="dropdown-item" to="#">Delete ReciPe</Link></li>
          </ul>
        </div>
      </div>
      <div className='mb-3'>
        <label>{details?.name}</label>
      </div>
      <div className='details-ingredient mt-2'>
        {
          details?.ingredient.map((elm, index) => {
            return (
              editForm === false ?
                <div key={index} className='mt-1'>
                  <input className='form-control' type='text' disabled={true} defaultValue={`${elm?.nameIngredient} - ${elm?.countIngredient}`} />
                </div> :
                <div key={index} className='recipes__info__ingredient row d-flex mb-2'>
                  <div className='recipes__info__ingredient-name col-md-6'>
                    <input className='form-control' type="text" defaultValue={elm?.nameIngredient} />
                  </div>
                  <div className='recipes__info__ingredient-count col-md-3'>
                    <input className='form-control' type="text" defaultValue={elm?.countIngredient} />
                  </div>
                  <div className='recipes__info__ingredient-close col-md-1'>
                    <label className='btn bg-danger'>X</label>
                  </div>
                </div>
            )
          })
        }
        {
          editForm ? < div className='row d-flex mt-3'>
            <button className='btn bg-success w-auto me-2' onClick={() => addIngredient()}>
              Add Ingredient
            </button>
            <button className='btn bg-success w-auto'>Save</button>
          </div> : ''
        }
      </div>
    </>
  )
}
