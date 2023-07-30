import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import { BurgerConstructor } from "../burger-constructor/burger-constructor"
import { useState, useEffect } from "react";
import { data } from "../../utils/data"

export function App() {

  const [burger, setBurger] = useState({
      top: data[0],
      middle: [
        data[4]
      ],
      bottom: data[0],
    })

  const deleteIngredient = (_id) => {
    console.log("deleted: " + _id)
  }

  const addIngredient = (_id) => {
    //console.log("added: " + _id)
    const engredient = data.find((item) => {if (item._id === _id) return(item)})
    console.log(engredient)
    setBurger({...burger, middle:[...burger.middle, engredient]})
  }

  useEffect(() => {
    console.log(burger);
  }, [burger.middle])

  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients {...burger} addIngredient={addIngredient}/>
        <BurgerConstructor {...burger} deleteIngredient={deleteIngredient}/>
      </main>
    </div>
  );
}