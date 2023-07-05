import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"

export const burger = {}

export class BurgerConstructor extends React.Component {

    constructor(props){
      super(props)
      console.log(this.props)
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={this.props.top.title + " (верх)"}
                price={this.props.top.price}
                thumbnail={this.props.top.image}
              />
              {this.props.middle.map((item, i) => {return <ConstructorElement text={this.props.middle[i].title} price={this.props.middle[i].price} thumbnail={this.props.middle[i].image}/>})}
              
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={this.props.bottom.title + " (низ)"}
                price={this.props.bottom.price}
                thumbnail={this.props.bottom.image}
              />
            </div>
          )
    }
}