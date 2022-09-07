import React from 'react'
import ListItem from './ListItem'
import Recipes from './Recipes'

export default function Home() {
  return (
    <div className='row m-0'>
      <div className="col-md-6"><Recipes /></div>
      <div className="col-md-6"><ListItem /></div>
    </div>
  )
}
