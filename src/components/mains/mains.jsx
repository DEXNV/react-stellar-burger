import { useRef } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./mains.module.css";
import { deleteIngredient } from "../burger-constructor/burger-constructor";
import { useDrag, useDrop } from "react-dnd";
import uuid from "react-uuid";

export const Mains = ({ deleteIngredient, item, first, moveIngredient }) => {

  const [, drop] = useDrop({
    accept: "ingredient",
    hover: (itemNew, monitor) => {
        moveIngredient(item, itemNew)
    }
  });

  

  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? 1 : 1;

  const ref = useRef(null);

  drag(drop(ref));

  return (
    <div
      className={styles.elementBox + first}
      ref={ref}
      style={{ opacity }}
    >
      <button className={styles.dragDots} />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        extraClass="ml-2 mr-2"
        handleClose={() => deleteIngredient(item)}
      />
    </div>
  );
};
