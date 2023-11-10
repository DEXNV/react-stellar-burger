import React from "react";
import { useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsList from "../ingredients-list/ingredients-list";

export const BurgerIngredients = () => {

    const [current, setCurrent] = React.useState('one')

    // const { burger, setBurger } = React.useContext(Context).burger;

    const { list, burger } = useSelector(store => ({
        list: store.ingredients,
        burger: store.burger,
    })) 
    
    return(
            <section>
                <p className="text text_type_main-large">Соберите бургер</p>
                <div className={"mt-5 mb-10 " + styles.tabs}>
                    <a className={styles.anchor} href="#buns"><Tab value="one" active={current === 'one'} onClick={setCurrent}>
                        Булки
                    </Tab></a>
                    <a className={styles.anchor} href="#sauces"><Tab value="two" active={current === 'two'} onClick={setCurrent}>
                        Соусы
                    </Tab></a>
                    <a className={styles.anchor} href="#mains"><Tab value="three" active={current === 'three'} onClick={setCurrent}>
                        Начинки
                    </Tab></a>
                </div> 
                {list.serverRespond === "Success" && <IngredientsList respond={list.serverRespond} ingredients={list.ingredients} burger={burger}></IngredientsList>}
            </section>
    )
}