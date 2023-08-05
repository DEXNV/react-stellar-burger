import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients"
import { BurgerConstructor } from "../burger-constructor/burger-constructor"
import { useState, useEffect } from "react";
import { data, serverLink } from "../../utils/data"
import { getIngredients } from "../../utils/api-ingredients";

export function App() {

  const [burger, setBurger] = useState({
    top: data[0],
    middle: [
      data[2],
      data[2],
      data[4],
      data[5],
      data[4],
      data[4],
      data[4],
      data[4],
    ],
    bottom: data[0],
})

const [list, setList] = useState({
  ingredients: [],
  serverRespond: ""
})

const [modal, setModal] = useState({
  opened: false,
})

  // const deleteIngredient = (_id) => {
  //   console.log("deleted: " + _id)
  // }

  // const addIngredient = (_id) => {
  //   const engredient = data.find((item) => {if (item._id === _id) return(item)})
  //   console.log(engredient)
  //   setBurger({...burger, middle:[...burger.middle, engredient]})
  // }

  // useEffect(() => {
  //   console.log(burger);
  // }, [burger.middle])

  useEffect(() => {
    getIngredients(setList)
  }, [])

  const openModal = () => {
    setModal({opened: true})
  }

  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients {...burger} ingredientsList={list} aa={openModal}/>
        <BurgerConstructor {...burger}/>
      </main>
    </div>
  );
}