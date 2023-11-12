import React, {useEffect} from "react";
import styles from "./ingredients-list.module.css";
import { Ingredient } from "../ingredient/ingredient";
import uuid from "react-uuid";
import { useInView } from "react-intersection-observer";

const IngredientsList = (props) => {

    const container = document.querySelector("#ingredientsDiv")
    const ingredientsDiv = [document.querySelector("#bunsDiv"), document.querySelector("#saucesDiv"), document.querySelector("#mainsDiv")]
    
    const [sortedIngredients, setIngredients] = React.useState({})

    const sortIngredient = (list, type) => {
        return list.map((item) => {
            if (item.type === type) return(item)
        }).filter(item => item !== undefined)
    }

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

    const update = () => { //Цикл тут почему-то не работает
        const buns = ingredientsDiv[0].getBoundingClientRect()
        const sauces = ingredientsDiv[1].getBoundingClientRect()
        const mains = ingredientsDiv[2].getBoundingClientRect()

        //console.log("Булки: " + ( buns.bottom > (buns.height + 54)) + " Соусы: " + (sauces.bottom > (sauces.height + 54)) + " Начинки: " + (mains.bottom > (mains.height + 54)))
        if(buns.top > (buns.height/2 + 84 - window.pageYOffset)) props.setTabNum("one")
        else if(sauces.top > (sauces.height)) props.setTabNum("two")
        else if(sauces.top < sauces.height/2 - 84 - window.pageYOffset) props.setTabNum("three")
        else props.setTabNum("two")
        console.log(window.pageYOffset)
    }

      if (container != null ) { 
        container.addEventListener("scroll", update)
      }


        return (
                <div className={styles.ingredientsList + " custom-scroll"} id="ingredientsDiv">
                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="buns" key={"buns"}>Булки</p>
                    <div id="bunsDiv" className={styles.componentsDiv}>{sortedIngredients.buns && (sortedIngredients.buns.map((item, i) => {return <Ingredient ingredient={item} addIngredient={props.addIngredient} count={countIngredient(item)} key={"bun-" + (i+1)} />}))}</div>

                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="sauces" key={"sauces"}>Соусы</p>
                    <div id="saucesDiv" className={styles.componentsDiv}>{sortedIngredients.sauces && (sortedIngredients.sauces.map((item, i) => {return <Ingredient ingredient={item} addIngredient={props.addIngredient} count={countIngredient(item)} key={"sauce-" + (i+1)}/>}))}</div>

                    <p className={"mb-6 text text_type_main-medium " + styles.ingredientsType} id="mains" key={"mains"}>Начинка</p>
                    <div id="mainsDiv" className={styles.componentsDiv}>{sortedIngredients.main && (sortedIngredients.main.map((item, i) => {return <Ingredient ingredient={item} addIngredient={props.addIngredient} count={countIngredient(item)} key={"main-" + (i+1)}/>}))}</div>
                </div>
        )
}

export default IngredientsList  