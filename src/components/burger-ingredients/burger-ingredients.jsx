import { useState, useEffect } from "react";
import React from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsList from "../ingredients-list/ingredients-list";
import PropTypes from 'prop-types';
import { BurgerPropTypes } from "../../utils/data";
import { Context } from "../../services/Context";

export const BurgerIngredients = (props) => {

    const [current, setCurrent] = React.useState('one')

    const { burger, setBurger } = React.useContext(Context);

    const addIngredient = (ingredient) => {
        if (ingredient.type == "bun") {
            setBurger({ ...burger, bun: ingredient})
        } else {
            const newMiddle = burger.middle.push(ingredient)
            setBurger({ ...burger, newMiddle}); console.log(ingredient)
        }
    }
    
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
                {props.ingredientsList.serverRespond === "Success" && <IngredientsList ingredients={props.ingredientsList.ingredients} burger={props} addIngredient={addIngredient}></IngredientsList>}
            </section>
        </>
    )
}

BurgerIngredients.propTypes = {
    bun: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired, 
        image: PropTypes.string,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired 
      }).isRequired, //По непонятным мне причинам, он не подтягивает функцию
      //Хотя с middle все ок
      middle: PropTypes.arrayOf(PropTypes.shape({BurgerPropTypes})).isRequired,
    }