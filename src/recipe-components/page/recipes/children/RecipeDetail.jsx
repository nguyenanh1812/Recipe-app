import React from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};


export default function ({ recipe }) {
    console.log(recipe, 'recipe')
    return (
        <div>
            <img src={recipe.imgURL} alt="" className='w-50 h-50'/>
            <h3 className='text-white'>{recipe.name}</h3>
            <Select className='rounded'
                labelInValue
                defaultValue={{
                    value: '',
                    label: 'Manage Recipe',
                }}
                style={{
                    width: 200,
                }}
                onChange={handleChange}
            >
                <Option value="toShoppingList">To ShoppingList</Option>
                <Option value="EditRecipe">Edit Recipe</Option>
                <Option value="deleteRecipe">Delete Recipe</Option>
            </Select>
            <h5 className='text-white'>{recipe.description}</h5>
            {recipe.ingredients.map(item=>(
                <div className='border border-white text-white p-2 rounded'>{item.name} {item.quantity}</div>
            ))}
            


        </div>
    )
}
