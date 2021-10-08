import React, {useEffect} from "react";
import ReactDOM from 'react-dom'
import './index.css'
import shoppingList from '../src/'

const shoppingList = () => {
  useEffect(() => {
    const url="https://fetch-me.vercel.app/shopping-list.json";

const fetchData = async() => {
try{
  const responce = await fetch(url);
  const json = await response.json();
  console.log(json);
} catch (error) {
console.log("error", error);
}
};

fetchData();

  },[]);

  return <div></div>;
};



export default App;