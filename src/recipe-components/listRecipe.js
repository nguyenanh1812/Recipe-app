import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDetails } from '../app/detailsSlice'

export default function ListRecipe({ btnShowBox, setShowBox, setDisabled }) {
  const listRecipes = useSelector(state => state.listRecipe)
  const dispatch = useDispatch()
  const showDetail = (elm, index) => {
    setShowBox({
      newRecipe: false,
      details: true
    })
    const newDetails = { ...elm, index: index }
    setDisabled(true)
    console.log(123)
    const action = addDetails(newDetails)
    dispatch(action)
  }
  return (
    <div className='recipes__list col-md-5'>
      <div className='recipes__list__btn-new-recipes pb-3 border-bottom'>
        <input type='reset' value='New Recipe' className='btn bg-success mt-3' onClick={() => btnShowBox()} />
      </div>
      <div className='recipes__list__btn-new-recipes w-100'>
        {
          listRecipes?.length > 0 ? listRecipes?.map((elm, index) => {
            return (
              <button onClick={() => showDetail(elm, index)} style={{ minWidth: '300px' }} className='btn text-start mt-3 border d-block' key={index}>
                <div className='recipes__list__item d-flex'>
                  <div className='recipes__list__item__name col-md-10'>
                    <h5>{elm.name}</h5>
                    <p>{elm.name}</p>
                  </div>
                  <div className='recipes__list__item__name col-md-2'>
                    <img className='w-100' src={elm.img} alt='' />
                  </div>
                </div>
              </button>
            )
          }) : ''
        }
      </div>
    </div>
  )
}
