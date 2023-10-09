import React from "react";
import styles from "./ingredient.module.css"
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../../hocs/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

export const Ingredient = (props) => {
    
    const [modalActive, toggleModal] = React.useState({isVisible: false});
    
    return(
        
        <div>
            <Modal props={props.ingredient} isVisible={modalActive.isVisible} toggleModal={toggleModal} heading={'Детали ингридиента'}>
                {<IngredientDetails ingredient={props.ingredient} />}
            </Modal>
            <div className={styles.ingredientCard} /*onClick={() => this.}*/ onClick={() => toggleModal({ isVisible: !modalActive.isVisible })}>
                <div className={styles.ingredientCounter}>{props.count !== 0  && props.count <= 99 && <Counter count={props.count} size="default" extraClass="m-1"/>}
                {props.count !== 0  && props.count > 99 && <Counter count={props.count} size="small"/>}</div>
                <img src={props.ingredient.image} className={"ml-4 mr-4 mb-2  " + styles.ingredientImage} alt={props.ingredient.name}></img>
                <div className={styles.ingredientPrice}>
                <p className="mr-2 text text_type_digits-default">{props.ingredient.price}</p><CurrencyIcon type="primary" />
                </div>
                <p className={"mt-2 text text_type_main-small " + styles.ingredientName}>{props.ingredient.name}</p>
            </div></div>
    )
}