import styles from "./ingredient.module.css"
import { useState, useEffect } from "react"
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../../hocs/modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/actions/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDrag } from "react-dnd";

export const Ingredient = (props) => {

    const dispatch = useDispatch();

    const ingredient = props.ingredient

    const [{isDrag}, dragRef] = useDrag({
        type: "newIngredient",
        item: ingredient,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    const [modalActive, toggleModal] = useState({isVisible: false});
    const ingredientInfo = () => {
        toggleModal({ isVisible: !modalActive.isVisible })
        dispatch(openModal(props.ingredient))
    }

    return(        
        <div>
           <Modal isVisible={modalActive.isVisible} toggleModal={toggleModal} heading={'Детали ингридиента'}>
                {<IngredientDetails ingredient={props.ingredient} />}
            </Modal>
            <div className={!isDrag ? styles.ingredientCard : styles.ingredientCardHidden} /*onClick={() => this.}*/ onClick={() => ingredientInfo()}>
                <div className={styles.ingredientCounter}>{props.count !== 0  && props.count <= 99 && <Counter count={props.count} size="default" extraClass="m-1"/>}
                {props.count !== 0  && props.count > 99 && <Counter count={props.count} size="small"/>}</div>
                <img src={props.ingredient.image} className={"ml-4 mr-4 mb-2  " + styles.ingredientImage} alt={props.ingredient.name} ref={dragRef}></img>
                <div className={styles.ingredientPrice}>
                <p className="mr-2 text text_type_digits-default">{props.ingredient.price}</p><CurrencyIcon type="primary" />
                </div>
                <p className={"mt-2 text text_type_main-small " + styles.ingredientName}>{props.ingredient.name}</p>
            </div>
        </div>
    )
}