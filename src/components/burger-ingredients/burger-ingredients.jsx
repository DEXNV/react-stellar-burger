import React from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsList from "../ingredients-list/ingredients-list";
import { data } from "../../utils/data"

export default class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "one"
        }
        this.setCurrent = this.setCurrent.bind(this)
    }

    setCurrent(value) {
        this.setState({current: value})
    }

    render(){
        return (
            <>
                <section>
                    <p className="text text_type_main-large">Соберите бургер</p>
                    <div className={"mt-5 mb-10 " + styles.tabs}>
                        <a className={styles.anchor} href="#buns"><Tab value="one" active={this.state.current === 'one'} onClick={this.setCurrent}>
                            Булки
                        </Tab></a>
                        <a className={styles.anchor} href="#sauces"><Tab value="two" active={this.state.current === 'two'} onClick={this.setCurrent}>
                            Соусы
                        </Tab></a>
                        <a className={styles.anchor} href="#mains"><Tab value="three" active={this.state.current === 'three'} onClick={this.setCurrent}>
                            Начинки
                        </Tab></a>
                    </div>
                    <IngredientsList ingredients={data}></IngredientsList>
                </section>
            </>
        )
    }
}