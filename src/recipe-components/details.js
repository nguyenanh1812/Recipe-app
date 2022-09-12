import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addEditDetails, changeCountEditDetails, changeNameEditDetails, removeEditDetails } from '../app/detailsSlice'
import { removeRecipe, saveEditDetails } from '../app/listRecipeSlice'

export default function Details({ showBox, setShowBox, disabled, setDisabled }) {
    const details = useSelector(state => state.details)
    const dispatch = useDispatch()
    const shoppingList = (e) => {
    }
    const btnEditForm = () => {
        setDisabled(false)
    }
    const btnDelRecipe = () => {
        if (window.confirm('Bạn có muốn xóa ?') === true) {
            const action = removeRecipe(details.index)
            dispatch(action)
            setShowBox({
                newRecipe: false,
                details: false
            })
        }
        else return;
    }
    const btnAddEditDetails = () => {
        const action = addEditDetails()
        dispatch(action)
    }
    const btnRemoveEditDetails = (index) => {
        const action = removeEditDetails(index)
        dispatch(action)
    }
    const handleNameDetail = (e, index) => {
        const action = changeNameEditDetails({ index: index, payload: e.target.value })
        dispatch(action)
    }
    const handleCountDetail = (e, index) => {
        const action = changeCountEditDetails({ index: index, payload: e.target.value })
        dispatch(action)
    }
    const saveEdit = () => {
        const arrCheck = details.ingredient.filter(el => el.countIngredient === '' || el.nameIngredient === '')
        if (arrCheck.length > 0) {
            alert('Thông tin không được bỏ trống!!')
        }
        else {
            const action = saveEditDetails(details)
            dispatch(action)
            alert('Lưu thông tin thành công!!')
        }
    }
    return (
        <div style={{ display: `${showBox.details ? 'block' : 'none'}` }}>
            <div className='mb-3'>
                <img className='w-100' src='' alt='' />
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
                    details?.ingredient?.map((elm, index) => {
                        return (
                            disabled === true ?
                                <div key={index} className='mt-1'>
                                    <input className='form-control' type='text' disabled={disabled} value={`${elm?.nameIngredient} - ${elm?.countIngredient}`} />
                                </div> :
                                <div key={index} className='recipes__info__ingredient row d-flex mb-2'>
                                    <div className='recipes__info__ingredient-name col-md-6'>
                                        <input className='form-control' type="text" onChange={(e) => handleNameDetail(e, index)} value={elm?.nameIngredient} />
                                    </div>
                                    <div className='recipes__info__ingredient-count col-md-3'>
                                        <input className='form-control' type="text" onChange={(e) => handleCountDetail(e, index)} value={elm?.countIngredient} />
                                    </div>
                                    <div className='recipes__info__ingredient-close col-md-1'>
                                        <label className='btn bg-danger' onClick={() => btnRemoveEditDetails(index)}>X</label>
                                    </div>
                                </div>
                        )
                    })
                }
                {
                    disabled === false ? < div className='row d-flex mt-3'>
                        <button className='btn bg-success w-auto me-2' onClick={() => btnAddEditDetails()}>Add Ingredient</button>
                        <button className='btn bg-success w-auto' onClick={() => saveEdit()}>Save</button>
                    </div> : ''
                }
            </div>
        </div>
    )
}
