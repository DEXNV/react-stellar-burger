import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";


export class BurgerConstructor extends React.Component {

    constructor(props){
      super(props)
      this.deleteIngredient = this.deleteIngredient.bind(this)
    }

    deleteIngredient(elem) {
      let index = this.props.middle.indexOf(elem)
      console.log(elem)
      this.props.middle.splice(index, 1);
      this.forceUpdate()
    }


    render() {
        return (
            <section className={"pt-5 pr-4 pb-5 pl-4 mt-10 " + styles.elementsList}>
              <div className={styles.burgerDiv}>
                <div className={styles.elementBox}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={this.props.top.name + " (верх)"}
                  price={this.props.top.price}
                  thumbnail={this.props.top.image}
                  extraClass="ml-8"
                />
                </div>

                <div className={styles.elementsListMain + " custom-scroll"}>
                {this.props.middle.map((item, i) => {

                  let first = ""
                  if(i !== 0) first = " mt-2" 

                  return <div className={styles.elementBox + first} key={"constructor-main " + i}>
                  <button className={styles.dragDots}/>
                  <ConstructorElement 
                    text={this.props.middle[i].name} 
                    price={this.props.middle[i].price} 
                    thumbnail={this.props.middle[i].image} 
                    key={"ingredient " + i} 
                    extraClass="ml-2"
                  // handleClose={() => this.props.deleteIngredient(i)}
                  /></div>
                })}
                </div>

                <div className={styles.elementBox}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={this.props.bottom.name + " (низ)"}
                  price={this.props.bottom.price}
                  thumbnail={this.props.bottom.image}
                  extraClass="ml-8"
                />
                </div>
              </div>
            </section>
          )
    }
}