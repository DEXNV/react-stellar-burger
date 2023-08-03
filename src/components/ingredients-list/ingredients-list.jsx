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

    sortIngredient(list, type) {
        return list.map((item) => {
            if (item.type === type) return(item)
        }).filter(item => item !== undefined)
    }

    // addIngredient = (ingredient) => {
    //     props.burger.middle.push(ingredient)
    //     this.forceUpdate()
    // }

    sortIngredients() {
        this.sortedIngredients.buns = this.sortIngredient(this.props.ingredients, "bun")
        this.sortedIngredients.main = this.sortIngredient(this.props.ingredients, "main")
        this.sortedIngredients.sauces = this.sortIngredient(this.props.ingredients, "sauce")
    }

    countIngredient(item) {
        let count = 0

        if (this.props.burger.top === item) count++

        Object.values(this.props.burger.middle).forEach((ingredient) => {
            if(item === ingredient) 
            {
                console.log(ingredient)
                count++
            }
        })

        return count
    }

    

    render() {
        
        return (
            <>
                <div className={styles.ingredientsList + " custom-scroll"}>
                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="buns" key={"buns"}>Булки</p>
                    {this.sortedIngredients.buns.map((item, i) => {return <Ingredient {...item}  addIngredient={this.props.addIngredient} count={this.countIngredient(item)} key={"bun-" + (i+1)}/>})}

                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="sauces" key={"sauces"}>Соусы</p>
                    {this.sortedIngredients.sauces.map((item, i) => {return <Ingredient {...item} addIngredient={this.props.addIngredient} count={this.countIngredient(item)} key={"sauce-" + (i+1)}/>})}

                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="mains" key={"mains"}>Начинка</p>
                    {this.sortedIngredients.main.map((item, i) => {return <Ingredient {...item} addIngredient={this.props.addIngredient} count={this.countIngredient(item)} key={"main-" + (i+1)}/>})}
                </div>
            </>
        )
    }
}