import React from "react";
import styles from "./ingredients-list.module.css";
import Ingredient from "../ingredient/ingredient";


export default class IngredientsList extends React.Component {
    constructor(props) {
        super(props)

        this.sortIngredients = this.sortIngredients.bind(this)
        this.sortedIngredients = {}
        this.sortIngredients()
    }

    _sortIngredient(list, type) {
        return list.map((item) => {
            if (item.type === type) return(item)
        }).filter(item => item !== undefined)
    }

    sortIngredients() {
        this.sortedIngredients.buns = this._sortIngredient(this.props.ingredients, "bun")
        this.sortedIngredients.main = this._sortIngredient(this.props.ingredients, "main")
        this.sortedIngredients.sauces = this._sortIngredient(this.props.ingredients, "sauce")
    }



    render() {
        return (
            <>
                <div className={"custom-scroll " + styles.ingredientsList}>
                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="buns" key={"buns"}>Булки</p>
                    {this.sortedIngredients.buns.map((item, i) => {return <Ingredient image={item.image} chosendefault={(i === 0)} price={item.price} name={item.name} key={"bun-" + (i+1)}/>})}

                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="sauces" key={"sauces"}>Соусы</p>
                    {this.sortedIngredients.sauces.map((item, i) => {return <Ingredient image={item.image} price={item.price} name={item.name} key={"sauce-" + (i+1)}/>})}

                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="mains" key={"mains"}>Начинка</p>
                    {this.sortedIngredients.main.map((item, i) => {return <Ingredient image={item.image} price={item.price} name={item.name} key={"sauce-" + (i+1)}/>})}
                </div>
            </>
        )
    }
}