import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { hiddenNewRecipe } from '../reducer/hiddenNewRecipe'
import { store } from '../app/store'
import Details from './details'

export default function Recipes() {
  const init = store.getState().details[0]
  // console.log(init)
  const [showElement, setShowElement] = useState({
    newRecipe: false,
    details: false
  })
  const [name, setName] = useState('')
  const [srcImg, setSrcImg] = useState('')
  const [showImg, setShowImg] = useState(false)
  const [des, setDes] = useState('')
  const [ingredientCount, setIngredientCount] = useState([])
  const listRecipes = useSelector(state => {
    // console.log(state)
    return state
  });
  // console.log(listRecipes)
  const newRecipe = () => {
    setShowElement({
      newRecipe: true,
      details: false
    })
  }
  const save = (e) => {
    // e?.preventDefault()
    store.dispatch({
      type: 'ADD_RECIPE', item: {
        name: name,
        img: srcImg,
        description: des,
        ingredient: ingredientCount
      }
    })
    console.log(store.getState())
  }
  // console.log(store.getState())
  const showDetail = (elm) => {
    setShowElement({
      newRecipe: false,
      details: true
    })
    store.dispatch({ type: 'SHOW_RECIPE', item: [elm] })
    // console.log(store.getState())
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleDes = (e) => {
    setDes(e.target.value)
  }
  const handleImg = (e) => {
    if (e.target.value) {
      setShowImg(true)
      setSrcImg(e.target.value)
    }
    else setShowImg(false)
  }
  const addIngredient = () => {
    setIngredientCount([...ingredientCount, {
      nameIngredient: '',
      countIngredient: ''
    }])
  }
  const delIngredient = (id) => {
    setIngredientCount(pre => {
      let newArr = [...pre]
      newArr.splice(id, 1)
      console.log(newArr)
      return newArr
    })
  }
  const ingredientName = (e, id) => {
    setIngredientCount(pre => {
      const newArr = pre.map((elm, index) => {
        if (index === id) {
          elm.nameIngredient = e.target.value
        }
        return elm
      })
      return newArr
    })
  }
  const ingredientCounts = (e, id) => {
    setIngredientCount(pre => {
      const newArr = pre.map((elm, index) => {
        if (index === id) {
          elm.countIngredient = e.target.value
        }
        return elm
      })
      return newArr
    })
  }
  return (
    <div className='recipes row d-flex' style={{ marginLeft: '5%' }}>
      <div className='recipes__list col-md-5'>
        <div className='recipes__list__btn-new-recipes pb-3 border-bottom'>
          <input type='reset' value='New Recipe' className='btn bg-success mt-3' onClick={() => newRecipe()} />
        </div>
        <div className='recipes__list__btn-new-recipes w-100'>
          {
            listRecipes.listRecipe.length > 0 ? listRecipes.listRecipe.map((elm, index) => {
              return (
                <button onClick={() => showDetail(elm)} className='btn text-start mt-3 border d-block' key={index}>
                  <div className='recipes__list__item d-flex'>
                    <div className='recipes__list__item__name col-md-10'>
                      <h5>{elm?.name}</h5>
                      <p>{elm?.name}</p>
                    </div>
                    <div className='recipes__list__item__name col-md-2'>
                      <img className='w-100' src={elm?.img} alt='' />
                    </div>
                  </div>
                </button>
              )
            }) : ''
          }
        </div>
      </div>
      {/* <form className='form pb-5 border-bottom recipes__info ' prevenDefault> */}
      <div className='col-md-6 me-5' style={{ display: `${showElement.newRecipe === true ? 'block' : 'none'}` }}>

        <form className='form pb-5 border-bottom'>
          <div className='recipes__info_btn mt-3'>
            <input className='btn bg-success' type='reset' onClick={(e) => save(e)} value='Save' />
            <input type='reset' value='Cancel' className='btn bg-danger' />
          </div>
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
      </div>
      <div className='col-md-6 mt-3' style={{ display: `${showElement.details ? 'block' : 'none'}` }}>
        <Details />
      </div>
    </div>
  )
}
