import React from "react";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from 'prop-types';
import { Modal } from "../../hocs/modal";
import OrderDetails from "../order-details/order-details";

export const BurgerConstructor = (props) => {
    
    const [modalActive, toggleModal] = React.useState({isVisible: false});

    const deleteIngredient = (elem) => {
      let index = props.middle.indexOf(elem)
      console.log(elem)
      props.middle.splice(index, 1);
    }

    const costCount = () => {
      let cost = 0
      props.middle.forEach(element => {
        cost += element.price
      });
      return (cost += props.top.price)
    }

    const value = costCount()

        return (
            <section className={"mt-10 " + styles.elementsList}>
              <Modal props={{number : '036872'}} isVisible={modalActive.isVisible} toggleModal={toggleModal}>{OrderDetails}</Modal>
              <div className={styles.burgerDiv + " pt-5 pb-5 pl-4"}>
                <div className={styles.elementBox}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={props.top.name + " (верх)"}
                  price={props.top.price}
                  thumbnail={props.top.image}
                  extraClass="ml-8"
                />
                </div>

                <div className={styles.elementsListMain + " custom-scroll"}>
                {props.middle.map((item, i) => {

                  let first = ""
                  if(i !== 0) first = " mt-4" 

                  return (<div className={styles.elementBox + first} key={"constructor-main " + i}>
                  <button className={styles.dragDots}/>
                  <ConstructorElement 
                    text={props.middle[i].name} 
                    price={props.middle[i].price} 
                    thumbnail={props.middle[i].image} 
                    key={"ingredient " + i} 
                    extraClass="ml-2 mr-2"
                  // handleClose={() => this.props.deleteIngredient(i)}
                  /></div>)
                })}
                </div>

                <div className={styles.elementBox}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={props.bottom.name + " (низ)"}
                  price={props.bottom.price}
                  thumbnail={props.bottom.image}
                  extraClass="ml-8"
                />
                </div>
              </div>
              <div className={styles.priceDiv + " pr-4 mt-5"}>
                <div className={styles.priceCount}>
                  <p className="text text_type_digits-medium">{value.toString()}</p> 
                  <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={() => {toggleModal({ isVisible: true })}}>Оформить заказ</Button>
              </div>
            </section>
          )
}

BurgerConstructor.propTypes = {
  top: PropTypes.object,
  middle: PropTypes.array,
  bottom: PropTypes.object
}