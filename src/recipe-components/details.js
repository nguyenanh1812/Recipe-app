import React, { useState } from 'react'
import { store } from '../app/store'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Details({ btnEditForm, editForm }) {
    console.log(store.getState().details)
    const details = useSelector(state => state.details[0])
    const indexDetails = useSelector(state => state.details[1])
    // const listIngredient = indexDetails;
    // console.log(indexDetails)
    // setListIngredient(details)
    // console.log(listIngredient)
    // console.log('details', store.getState().details)
    // const [editForm, setEditForm] = useState(false)
    // const btnEditForm = () => {
    //     setEditForm(true)
    // }

    const shoppingList = (e) => {
        e.prevenDefault()
    }

    const editNameIngredient = (e, index) => {
        dispatch({
            type: 'EDIT_NAMEINGREDIENT', item: [{
                nameIngredient: e.target.value
            }, index]

        })
    }

    const editCountIngredient = (e, index) => {
        dispatch({
            type: 'EDIT_COUNTINGREDIENT', item: [{
                countIngredient: e.target.value
            }, index]

        })
    }
    const dispatch = useDispatch()
    const btnEditAddIngredient = () => {
        dispatch({
            type: 'ADD_INGREDIENT', item: {
                nameIngredient: '',
                countIngredient: '',
            }
        })
        // console.log(store.getState().details[0].ingredient)
    }
    // console.log(details)
    const btnDelRecipe = () => {
        dispatch({ type: 'DEL_RECIPE', item: indexDetails })
        // console.log(store.getState())
    }
    const saveEditRecipe = () => {
        dispatch({ type: 'SAVE_EDIT_RECIPE', item: indexDetails })
        console.log(store.getState().details[0])
    }
    const btnDelEditIngredinet = (index) => {
        dispatch({ type: 'DEL_EDIT_INGREDIENT', item: index })
        details?.ingredient.splice(index, 1)
        console.log(details)
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
                        <li onClick={() => btnEditForm()}><div className="dropdown-item">Edit ReciPe</div></li>
                        <li onClick={() => btnDelRecipe()}><div className="dropdown-item">Delete ReciPe</div></li>
                    </ul>
                </div>
            </div>
            <div className='mb-3'>
                <label>{details?.name}</label>
            </div>
            <div className='details-ingredient mt-2'>
                {
                    details?.ingredient.map((elm, index) => {
                        // console.log(details)
                        return (
                            editForm === false ?
                                <div key={index} className='mt-1'>
                                    <input className='form-control' type='text' disabled={true} value={`${elm?.nameIngredient} - ${elm?.countIngredient}`} />
                                </div> :
                                <div key={index} className='recipes__info__ingredient row d-flex mb-2'>
                                    <div className='recipes__info__ingredient-name col-md-6'>
                                        <input className='form-control' type="text" onChange={(e) => editNameIngredient(e, index)} value={elm?.nameIngredient} />
                                    </div>
                                    <div className='recipes__info__ingredient-count col-md-3'>
                                        <input className='form-control' type="text" onChange={(e) => editCountIngredient(e, index)} value={elm?.countIngredient} />
                                    </div>
                                    <div className='recipes__info__ingredient-close col-md-1'>
                                        <label onClick={() => btnDelEditIngredinet(index)} className='btn bg-danger'>X</label>
                                    </div>
                                </div>
                        )
                    })
                }
                {
                    editForm ? < div className='row d-flex mt-3'>
                        <button onClick={() => btnEditAddIngredient()} className='btn bg-success w-auto me-2'>Add Ingredient</button>
                        <button onClick={() => saveEditRecipe()} className='btn bg-success w-auto'>Save</button>
                    </div> : ''
                }
            </div>
        </>
    )
}
