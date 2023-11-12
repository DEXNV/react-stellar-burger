import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients"
import { BurgerConstructor } from "../burger-constructor/burger-constructor"
import { useEffect } from "react";
import { getIngredients } from "../../utils/api-ingredients";
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [])

  return (
      <div className={styles.app}>
        <AppHeader/>
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      </div>
  );
}