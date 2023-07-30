import React from "react";
import styles from "./ingredient.module.css"
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";


export default class Ingredient extends React.Component {
    constructor(props) {
        super(props)
        this.addIngredient = this.props.addIngredient
    }

    render(){
        return (
            <div className={styles.ingredientCard} onClick={() => this.addIngredient(this.props._id)}>
                <div className={styles.ingredientCounter}>{this.props.chosendefault  && <Counter count={1} size="default" extraClass="m-1"/>}</div>
                <img src={this.props.image} className={"ml-4 mr-4 mb-2  " + styles.ingredientImage}></img>
                <div className={styles.ingredientPrice}>
                <p className="mr-2 text text_type_digits-default">{this.props.price}</p><CurrencyIcon type="primary" />
                </div>
                <p className={"mt-2 text text_type_main-small " + styles.ingredientName}>{this.props.name}</p>
            </div>
        )
    }
}