import React, { useReducer, useEffect } from "react";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from 'prop-types';
import { Modal } from "../../hocs/modal";
import OrderDetails from "../order-details/order-details";
import { BurgerPropTypes } from "../../utils/data";
import { Context } from "../../services/Context.js";
import { postOrder } from "../../utils/api-ingredients";

export const BurgerConstructor = () => {
    
    const [modalActive, toggleModal] = React.useState({isVisible: false});

    const burger = React.useContext(Context).burger;

    const deleteIngredient = (elem) => {
      let index = burger.middle.indexOf(elem)
      console.log(elem)
      burger.middle.splice(index, 1);
    }

    const ingredientCount = (state, action) => {
      switch (action.type) {
        case "countCost": {
          let cost = 0
          burger.middle.forEach(element => {
            cost += element.price
          });
          return {...state, cost: cost + burger.bun.price * 2}
        }
        case "countId": {
          let ids = []
          ids.push(burger.buns)
          burger.middle.forEach(element => {
            ids.push(element)
          });
          console.log(ids)
          return { ...state, orderid: ids.push(burger.buns)}
        }
        default: {
          console.log('Нет такого типа')
        }
      }
    }

    const [order, setOrder] = useReducer(ingredientCount, {cost: 0, orderid: []});

    useEffect(() => {
      setOrder({ type: "countCost" })
      setOrder({ type: "countId" })
    }, [burger])

    // useEffect(() => {
    //   setOrder({ type: "countId" })
    // }, )




        return (
            <section className={"mt-10 " + styles.elementsList}>
              <Modal props={{number : order.orderid}} isVisible={modalActive.isVisible} toggleModal={toggleModal}>{OrderDetails}</Modal>
              <div className={styles.burgerDiv + " pt-5 pb-5 pl-4"}>
                <div className={styles.elementBox}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={burger.bun.name + " (верх)"}
                  price={burger.bun.price}
                  thumbnail={burger.bun.image}
                  extraClass="ml-8"
                />
                </div>

                <div className={styles.elementsListMain + " custom-scroll"}>
                {burger.middle.map((item, i) => {

                  let first = ""
                  if(i !== 0) first = " mt-4" 

                  return (<div className={styles.elementBox + first} key={"constructor-main " + i}>
                  <button className={styles.dragDots}/>
                  <ConstructorElement 
                    text={burger.middle[i].name} 
                    price={burger.middle[i].price} 
                    thumbnail={burger.middle[i].image} 
                    key={"ingredient " + i} 
                    extraClass="ml-2 mr-2"
                  // handleClose={() => this.burger.deleteIngredient(i)}
                  /></div>)
                })}
                </div>

                <div className={styles.elementBox}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={burger.bun.name + " (низ)"}
                  price={burger.bun.price}
                  thumbnail={burger.bun.image}
                  extraClass="ml-8"
                />
                </div>
              </div>
              <div className={styles.priceDiv + " pr-4 mt-5"}>
                <div className={styles.priceCount}>
                  <p className="text text_type_digits-medium">{order.cost}</p> 
                  <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={() => {toggleModal({ isVisible: true })}}>Оформить заказ</Button>
              </div>
            </section>
          )
          
}

BurgerConstructor.propTypes = {
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