import { useRef } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./mains.module.css";
import { deleteIngredient } from "../burger-constructor/burger-constructor";
import { useDrag, useDrop } from "react-dnd";
import uuid from "react-uuid";

export const Mains = ({ deleteIngredient, item, first, moveIngredient, index }) => {

  const [, drop] = useDrop({
    accept: "ingredient",
    hover: (itemNew, monitor) => {
        if (!ref.current) return;
        if(index === itemNew.index) return 

        const hoverBoundRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY = (hoverBoundRect.bottom - hoverBoundRect.top) / 2

        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundRect.top

        if (index.index < itemNew && hoverClientY < hoverMiddleY) return;
        if (itemNew > index.index && hoverClientY > hoverMiddleY) return;
        console.log(hoverBoundRect)
        
        moveIngredient(index, itemNew)

        item.index = index.index
    }
  });

  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: {index: index},
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? 0 : 1;

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
