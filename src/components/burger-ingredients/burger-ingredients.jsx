import { useState, useEffect } from "react";
import React from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsList from "../ingredients-list/ingredients-list";
import PropTypes from 'prop-types';

export const BurgerIngredients = (props) => {

    const [current, setCurrent] = React.useState('one')

    return(
        <>
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
                {props.ingredientsList.serverRespond === "Success" && <IngredientsList ingredients={props.ingredientsList.ingredients} burger={props} addIngredient={props.addIngredient}></IngredientsList>}
            </section>
        </>
    )
}

BurgerIngredients.propTypes = {
    top: PropTypes.object,
    middle: PropTypes.array,
    bottom: PropTypes.object
}