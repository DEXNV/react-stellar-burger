import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients"
import { BurgerConstructor } from "../burger-constructor/burger-constructor"
import { useState, useEffect } from "react";
import { data, serverLink } from "../../utils/data"
import { getIngredients } from "../../utils/api-ingredients";
import { Context } from "../../services/Context";



export function App() {

  const [list, setList] = useState({
    ingredients: [],
    serverRespond: ""
  })

  const [burger, setBurger] = useState({
    bun: data[1],
    middle: [],
})

const [modal, setModal] = useState({
  opened: false,
})

  useEffect(() => {
    getIngredients(setList, setBurger).catch(error => {
      console.error(error);
      setBurger({serverRespond: "Error"})
  });
  }, [])

  

  return (
    <Context.Provider value={{ setBurger, burger, list }}>
      <div className={styles.app}>
        <AppHeader/>
        <main className={styles.main}>
          <BurgerIngredients {...burger} ingredientsList={list}/>
          <BurgerConstructor />
        </main>
      </div>
    </Context.Provider>
  );
}