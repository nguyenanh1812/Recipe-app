import React from 'react';
import { useSelector } from 'react-redux';

export default function Recipes() {
  const list = useSelector((state) => state);
  console.log(list);
  return <div>Recipes</div>;
}
