import React, { useReducer, useEffect, useRef } from "react";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { Modal } from "../../hocs/modal";
import OrderDetails from "../order-details/order-details";
import { postOrder } from "../../utils/api-ingredients";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../services/actions/modal";
import { useDrop, useDrag } from "react-dnd";
import { addBurgerIngredient, deleteBurgerIngredient, changeBurgerMiddle } from "../../services/actions/burger-construcor";
import { Mains } from "../mains/mains";
import uuid from 'react-uuid';

export const BurgerConstructor = () => { 

    const dispatch = useDispatch(); 

    const { burger, orderState } = useSelector(store => ({
      burger: store.burger,
      orderState: store.order
    })) 

    const [modalActive, toggleModal] = React.useState({isVisible: false});

    const [, drop] = useDrop({
      accept: "newIngredient",
      drop(item) {
        console.log(item)
        dispatch(addBurgerIngredient(item))
      },
    });


    

    const orderBtnClick = () => {
      getOrderId()
      toggleModal({ isVisible: true });
    }

    const deleteIngredient = (item) => {
      dispatch(deleteBurgerIngredient(item))
    }

    const getOrderId = () => {
      let ids = []

      ids.push(burger.bun._id)
      burger.middle.forEach(element => {
        ids.push(element._id)
      });

      ids.push(burger.bun._id)
      dispatch(postOrder(ids))
      dispatch(openModal({}, 'order'))

      console.log(burger)
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

    const moveIngredient = (dragged, hover) => {

      const newBurgerMiddle = [...burger.middle]
      
      if (dragged === hover.index) {
        console.log(hover.index)
        return 
      }
      else {
        newBurgerMiddle.splice(hover.index, 0, newBurgerMiddle.splice(dragged, 1)[0]);
        dispatch(changeBurgerMiddle(newBurgerMiddle))
      } 
      
    }

    useEffect(() => {
      setOrder({ type: "countCost" })
    }, [burger])

        return (
            <section className={"mt-10 " + styles.elementsList}>
              { orderState.order.success && <Modal props={{number : orderState.order.number}} isVisible={modalActive.isVisible} toggleModal={toggleModal}>{orderState.orderSuccess && <OrderDetails {...orderState.order} />  }</Modal>}
              <div className={styles.burgerDiv + " pt-5 pb-5 pl-4"} ref={drop}>
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

                <div className={styles.elementsListMain + " custom-scroll"} >
                  {burger.middle.map((item, i) => { 
                    let first = ""
                    if(i !== 0) first = " mt-4" 
                    return (<Mains props={deleteIngredient} first={first} item={item} deleteIngredient={deleteIngredient} key={i} index={i}
                    moveIngredient={moveIngredient} uuid={item.uuid}/>)
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