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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={this.props.top.name + " (верх)"}
                price={this.props.top.price}
                thumbnail={this.props.top.image}
              />
              {this.props.middle.map((item, i) => {return <ConstructorElement text={this.props.middle[i].name} price={this.props.middle[i].price} thumbnail={this.props.middle[i].image} key={"ingredient " + i} handleClose={() => this.props.deleteIngredient(i)}/>})}
              
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={this.props.bottom.name + " (низ)"}
                price={this.props.bottom.price}
                thumbnail={this.props.bottom.image}
              />
            </div>
          )
    }
}