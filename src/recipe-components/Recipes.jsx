import React from 'react'
import { useState } from 'react'
import BoxNewRecipe from './boxNewRecipe'
import Details from './details'
import ListRecipe from './listRecipe'

export default function Recipes() {
  const [showBox, setShowBox] = useState({
    newRecipe: false,
    details: false
  })
  const [disabled, setDisabled] = useState(true)
  const btnShowBox = () => {
    setShowBox({
      newRecipe: true,
      details: false
    })
  }
  return (
    <div className='recipes row d-flex' style={{ marginLeft: '5%' }}>
      <ListRecipe btnShowBox={btnShowBox} setShowBox={setShowBox} setDisabled={setDisabled} />
      <BoxNewRecipe showBox={showBox} />
      <div className='col-md-6 mt-3'>
        <Details showBox={showBox} setShowBox={setShowBox} disabled={disabled} setDisabled={setDisabled} />
      </div>
    </div>
  )
}
