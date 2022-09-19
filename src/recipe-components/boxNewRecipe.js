import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addIngredient, removeIngredient, saveNameIngredient, saveCountIngredient, clearIngredient } from '../app/listIngredientSlice'
import { addRecipe } from '../app/listRecipeSlice'

export default function BoxNewRecipe({ showBox }) {
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    // const listRecipe = useSelector(state => state.listRecipe)
    const ingredientCount = useSelector(state => state.listIngredient)
    const dispatch = useDispatch()
    const btnAddIngredient = (e) => {
        const action = addIngredient()
        dispatch(action)
    }
    const btnSaveRecipe = () => {
        const action = addRecipe({
            name: name,
            img: img,
            description: description,
            ingredient: ingredientCount
        })
        const arrCheck = ingredientCount.filter(el => el.nameIngredient === '' || el.countIngredient === '')
        if (name === '' || img === '' || description === '' || arrCheck.length > 0) {
            alert('Thông tin không được bỏ trống!!')
        }
        else {
            dispatch(action)
            dispatch(clearIngredient())
        }
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleImg = (e) => {
        setImg(e.target.value)
        // setShowImg(true)
    }
    const handleDes = (e) => {
        setDescription(e.target.value)
    }
    const btnRemoveIngredient = (index) => {
        const action = removeIngredient(index)
        dispatch(action)
    }

    const handleNameIngredient = (e, index) => {
        // console.log(e.target.value)
        const action = saveNameIngredient({ index: index, payload: e.target.value })
        dispatch(action)
    }

    const handleCountIngredient = (e, index) => {
        const action = saveCountIngredient({ index: index, payload: e.target.value })
        dispatch(action)
    }
    return (
        <div className='col-md-6 me-5' style={{ display: `${showBox.newRecipe ? 'block' : 'none'}` }}>
            <form className='form pb-5 border-bottom'>
                <div className='recipes__info_btn mt-3'>
                    <input onClick={() => btnSaveRecipe()} className='btn bg-success' type='reset' value='Save' />
                    <input type='reset' value='Cancel' className='btn bg-danger' />
                </div>
                <label>Name</label>
                <input className='form-control' type='text' name='name' onChange={(e) => handleName(e)} />
                <label>Image URL</label>
                <input className='form-control' type='text' name='image-url' onChange={(e) => handleImg(e)} />
                <img className='mt-2 d-block' src={img} alt='' />
                <label>Description</label>
                <textarea className='form-control mb-2' rows='3' name='description' onChange={(e) => handleDes(e)} />
                <div className='container-fluid'>
                    {
                        ingredientCount.length > 0 ? ingredientCount.map((el, index) => {
                            return (
                                <div key={index} className='recipes__info__ingredient row d-flex mb-2'>
                                    <div className='recipes__info__ingredient-name col-md-6'>
                                        <input className='form-control' type="text" onChange={(e) => handleNameIngredient(e, index)} value={el.nameIngredient} />
                                    </div>
                                    <div className='recipes__info__ingredient-count col-md-3'>
                                        <input className='form-control' type="text" onChange={(e) => handleCountIngredient(e, index)} value={el.countIngredient} />
                                    </div>
                                    <div className='recipes__info__ingredient-close col-md-1'>
                                        <label onClick={() => btnRemoveIngredient(index)} className='btn bg-danger'>X</label>
                                    </div>
                                </div>
                            )
                        }) : ''
                    }
                </div>
                <input type='button' onClick={(e) => btnAddIngredient(e)} className='btn bg-success mt-3' value='Add Ingredinet' />
            </form>
        </div>
    )
}
