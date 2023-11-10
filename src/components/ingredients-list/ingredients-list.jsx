import React, {useEffect} from "react";
import styles from "./ingredients-list.module.css";
import { Ingredient } from "../ingredient/ingredient";

const IngredientsList = (props) => {
    
    const [sortedIngredients, setIngredients] = React.useState({})

    const sortIngredient = (list, type) => {
        return list.map((item) => {
            if (item.type === type) return(item)
        }).filter(item => item !== undefined)
    }

    // addIngredient = (ingredient) => {
    //     props.burger.middle.push(ingredient)
    //     this.forceUpdate()
    // }

    useEffect(() => {
        const buns = sortIngredient(props.ingredients, "bun")
        const main = sortIngredient(props.ingredients, "main")
        const sauces = sortIngredient(props.ingredients, "sauce")
        
        setIngredients({buns: buns, main: main, sauces: sauces})
        
    }, [])

    const countIngredient = (item) => {
        let count = 0
        if (props.burger.bun === item) count++

        Object.values(props.burger.middle).forEach((ingredient) => {
            if(item._id === ingredient._id) 
            {
                count++
            }
        })
        return count
    }

        return (
                <div className={styles.ingredientsList + " custom-scroll"}>
                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="buns" key={"buns"}>Булки</p>
                    {sortedIngredients.buns && (sortedIngredients.buns.map((item, i) => {return <Ingredient ingredient={item} addIngredient={props.addIngredient} count={countIngredient(item)} key={"bun-" + (i+1)} />}))}

                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="sauces" key={"sauces"}>Соусы</p>
                    {sortedIngredients.sauces && (sortedIngredients.sauces.map((item, i) => {return <Ingredient ingredient={item} addIngredient={props.addIngredient} count={countIngredient(item)} key={"sauce-" + (i+1)}/>}))}

                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="mains" key={"mains"}>Начинка</p>
                    {sortedIngredients.main && (sortedIngredients.main.map((item, i) => {return <Ingredient ingredient={item} addIngredient={props.addIngredient} count={countIngredient(item)} key={"main-" + (i+1)}/>}))}
                </div>
        )
}

export default IngredientsList  