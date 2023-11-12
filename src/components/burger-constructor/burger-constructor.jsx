import React, { useReducer, useEffect } from "react";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { Modal } from "../../hocs/modal";
import OrderDetails from "../order-details/order-details";
import { postOrder } from "../../utils/api-ingredients";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../services/actions/modal";
import { useDrop } from "react-dnd";
import { addBurgerIngredient, deleteBurgerIngredient, changeBurgerMiddle, changeBurgerBuns } from "../../services/actions/burger-construcor";
import { Mains } from "../mains/mains";
import uuid from 'react-uuid';
import defaultImage from "../../images/defaultImage.png"

export const BurgerConstructor = () => { 

    const dispatch = useDispatch(); 

    const { burger, orderState } = useSelector(store => ({
      burger: store.burger,
      orderState: store.order
    })) 

    const defaultBuns = burger.bun._id === "0"
    const defaultMain = burger.middle[0]._id === "0"
    
    let bunsImage
    let bunsCost
    if(defaultBuns){
      bunsImage = defaultImage 
      bunsCost = "?"
    }
    else {
      bunsImage = burger.bun.image
      bunsCost = burger.bun.price
    }

    const [modalActive, toggleModal] = React.useState({isVisible: false});

    const [, drop] = useDrop({
      accept: "newIngredient",
      drop(item) {
        (item.type === "bun")? 
        dispatch(changeBurgerBuns(item)):
        dispatch(addBurgerIngredient({...item, key: uuid()}))
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
        dispatch(changeBurgerMiddle({dragIndex: dragged, hoverIndex: hover}))   
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
                  price={bunsCost}
                  thumbnail={bunsImage}
                  extraClass="ml-8"
                />
                </div>

                <div className={styles.elementsListMain + " custom-scroll"} >
                  {burger.middle.map((item, i) => { 
                    let first = ""
                    if(i !== 0) first = " mt-4" 
                    return (<Mains props={deleteIngredient} first={first} item={item} deleteIngredient={deleteIngredient} key={item.key} index={i}
                    moveIngredient={moveIngredient}/>)
                  })}
                </div>

                <div className={styles.elementBox}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={burger.bun.name + " (низ)"}
                  price={bunsCost}
                  thumbnail={bunsImage}
                  extraClass="ml-8"
                />
                </div>
              </div>
              <div className={styles.priceDiv + " pr-4 mt-5"}>
                <div className={styles.priceCount}>
                  <p className="text text_type_digits-medium">{order.cost}</p> 
                  <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={orderBtnClick} disabled={(defaultBuns || defaultMain)}>Оформить заказ</Button>
              </div>
            </section>
          )
          
}