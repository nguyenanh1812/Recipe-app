import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_INGREDIENT, HANDLE_COUNT, HANDLE_NAME } from '../app/reducer/changeIngredientSlice'
import { ADD_LIST, DELETE_LIST, UPDATE_LIST } from '../app/reducer/shoppingListSlice'

export default function ShoppingList() {
    const dispatch = useDispatch()
    const shoppingList = useSelector(state => state.shoppingList)
    const changeIngredient = useSelector(state => state.changeIngredient)
    const [showBtn, setShowBtn] = useState({
      boxAdd: true,
      boxEdit: false
    })
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const btnEditIngredient = (elm, index) => {
      setName(elm.nameIngredient)
      setAmount(elm.countIngredient)
      setShowBtn({
        boxAdd: false,
        boxEdit: true
      })
  
      // dispatch thằng này vào changeIngredientSlice để nó lưu lại cái ingredient tương ứng rồi lấy được cả index của nó 
      // để có thể update và delete đúng cái mình cần
      const action = CHANGE_INGREDIENT({
        ...elm,
        index: index
      })
      dispatch(action)
    }
    const btnAddIngredient = () => {
      const action = ADD_LIST({
        nameIngredient: name,
        countIngredient: amount
      })
      dispatch(action)
      setName('')
      setAmount('')
    }
    const btnUpdate = () => {
      const actionListIngredient = UPDATE_LIST(changeIngredient)
      dispatch(actionListIngredient)
      setShowBtn({
        boxAdd: true,
        boxEdit: false
      })
      setName('')
      setAmount('')
    }
    const btnDel = () => {
      const action = DELETE_LIST(changeIngredient.index)
      dispatch(action)
      setName('')
      setAmount('')
    }
    const handleName = (e) => {
      setName(e.target.value)
      const action = HANDLE_NAME(e.target.value)
      dispatch(action)
    }
    const handleAmount = (e) => {
      setAmount(e.target.value)
      const action = HANDLE_COUNT(e.target.value)
      dispatch(action)
    }
    return (
      <div className='shopping-list container'>
        <div className='box-input d-flex '>
          <div className='name me-5 col-md-4'>
            <h6>Name</h6>
            <input className='form-control w-125' type='text' onChange={(e) => handleName(e)} value={name} />
          </div>
          <div className='amount'>
            <h6>Amount</h6>
            <input className='form-control m-width' type='text' onChange={(e) => handleAmount(e)} value={amount} />
          </div>
        </div>
        <div className='box-button mt-2' style={{ display: `${showBtn.boxAdd ? 'block' : 'none'}` }}>
          <button className='btn bg-success me-1' onClick={() => btnAddIngredient()}>Add</button>
          <button className='btn bg-primary'>Clear</button>
        </div>
        <div className='box-button mt-2' style={{ display: `${showBtn.boxEdit ? 'block' : 'none'}` }}>
          <button className='btn bg-success me-1' onClick={() => btnUpdate()}>Update</button>
          <button className='btn bg-danger me-1' onClick={() => btnDel()}>Delete</button>
          <button className='btn bg-primary'>Clear</button>
        </div>
        <div className='list-ingredient mt-2'>
          {
            shoppingList.length > 0 ?
              shoppingList.map((elm, index) => {
                return (
                  <div key={index} className='ingredient'>
                    <button onClick={() => btnEditIngredient(elm, index)} className='btn border w-100 text-start'>
                      {`${elm.nameIngredient} (${elm.countIngredient})`}
                    </button>
                  </div>
                )
              }) : ''
          }
        </div>
      </div>
    );
  }
