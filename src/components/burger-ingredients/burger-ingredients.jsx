import { useState, useEffect } from "react";
import React from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsList from "../ingredients-list/ingredients-list";
import PropTypes from 'prop-types';
import { BurgerPropTypes } from "../../utils/data";
import { Context } from "../../services/Context";

export const BurgerIngredients = () => {

    const [current, setCurrent] = React.useState('one')

    // const { burger, setBurger } = React.useContext(Context).burger;

    const list = React.useContext(Context).list;
    const burger = React.useContext(Context).burger

    // const addIngredient = (ingredient) => {
    //     if (ingredient.type == "bun") {
    //         setBurger({ ...burger, bun: ingredient})
    //     } else {
    //         const newMiddle = burger.middle.push(ingredient)
    //         setBurger({ ...burger, newMiddle}); console.log(ingredient)
    //     }
    // }
    
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
                {list.serverRespond === "Success" && <IngredientsList ingredients={list.ingredients} burger={burger}></IngredientsList>}
            </section>
    )
}