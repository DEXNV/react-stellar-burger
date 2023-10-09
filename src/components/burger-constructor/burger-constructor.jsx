import React, { useReducer, useEffect, useState } from "react";
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

    const [orderID, setOrderID] = React.useState({})

    const burger = React.useContext(Context).burger;

    const orderBtnClick = () => {
      getOrderId()
      toggleModal({ isVisible: true });
    }

    const deleteIngredient = (elem) => {
      let index = burger.middle.indexOf(elem)
      console.log(elem)
      burger.middle.splice(index, 1);
    }

    const getOrderId = () => {
      let ids = []

      ids.push(burger.bun._id)
      burger.middle.forEach(element => {
        // if(element._id === "643d69a5c3f7b9001cfa093c" || element._id === "643d69a5c3f7b9001cfa0941") return 0
        ids.push(element._id)
      });

      ids.push(burger.bun._id)

      postOrder(ids).then((res) => {setOrderID(res)}).catch(error => {console.error(error);});
      console.log(orderID)
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
        default: {
          console.log('Нет такого типа')
        }
      }
    }

    const [order, setOrder] = useReducer(ingredientCount, {cost: 0});

    useEffect(() => {
      setOrder({ type: "countCost" })
    }, [burger])

        return (
            <section className={"mt-10 " + styles.elementsList}>
              { orderID.success && <Modal props={{number : orderID.order.number}} isVisible={modalActive.isVisible} toggleModal={toggleModal}>{orderID.success && <OrderDetails {...orderID} />  }</Modal>}
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
                <Button htmlType="button" type="primary" size="large" onClick={orderBtnClick}>Оформить заказ</Button>
              </div>
            </section>
          )
          
}

