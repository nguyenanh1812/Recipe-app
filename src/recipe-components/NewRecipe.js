import React from 'react'
import { Link } from 'react-router-dom'

export default function NewRecipe({ save,
    handleName,
    handleDes,
    handleImg,
    addIngredient,
    ingredientCounts,
    ingredientCount,
    showImg,
    srcImg,
    delIngredient,
    ingredientName }) {
    return (
        <>
            <div className='recipes__info_btn mt-3'>
                <button className='btn bg-success' onClick={() => save()}>Save</button>
                <button className='btn bg-danger'>Cancel</button>
            </div>
            <form className='form pb-5 border-bottom'>
                <label>Name</label>
                <input className='form-control' type='text' name='name' onChange={(e) => handleName(e)} />
                <label>Image URL</label>
                <input className='form-control' type='text' name='image-url' onChange={(e) => handleImg(e)} />
                <img style={{ display: `${showImg ? 'block' : 'none'}` }} src={srcImg} alt='' />
                <label>Description</label>
                <textarea className='form-control mb-2' rows='3' name='description' onChange={(e) => handleDes(e)} />
                <div className='container-fluid'>
                    {
                        ingredientCount.length > 0 ? ingredientCount.map((el, index) => {
                            console.log(`nameIngredient ${index + 1} : ${el.nameIngredient}`)
                            console.log(`countIngredient ${index + 1} : ${el.countIngredient}`)
                            return (
                                <div key={index} className='recipes__info__ingredient row d-flex mb-2'>
                                    <div className='recipes__info__ingredient-name col-md-6'>
                                        <input className='form-control' type="text" value={el.nameIngredient} onChange={(e) => ingredientName(e, index)} />
                                    </div>
                                    <div className='recipes__info__ingredient-count col-md-3'>
                                        <input className='form-control' type="text" value={el.countIngredient} onChange={(e) => ingredientCounts(e, index)} />
                                    </div>
                                    <div className='recipes__info__ingredient-close col-md-1'>
                                        <label onClick={() => delIngredient(index)} className='btn bg-danger'>X</label>
                                    </div>
                                </div>
                            )
                        }) : ''
                    }
                </div>
            </form>
            <button className='btn bg-success mt-3' onClick={() => addIngredient()}>Add Ingredient</button>
        </>
    )
}
