import React, { useEffect, useState } from "react";
import {ShoppingList} from "../components/shoppingList";


export const App = () => {
const [shoppingItem, setShoppingItem]= useState([]);


useEffect(() => {
  const fetchAPI = async () => {
    try{
    const response = await fetch("https://fetch-me.vercel.app/shopping-list.json")
    const itemJson = await response.json(); 
    setShoppingItem(itemJson)
    console.log(itemJson)
  }catch (error){console.log('error', error)}}
  fetchAPI()
},[])





  return (
    <div className="App">
      {shoppingItem.map(({name, category, id}) =>
      <ShoppingList 
      key={id}
      name={name}
      category={category}
      />
      )}
    </div>
  );
};
