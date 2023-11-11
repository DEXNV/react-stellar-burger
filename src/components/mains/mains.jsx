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
        if(index == itemNew.index) return 

        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top

        if (itemNew.index < index  && hoverClientY > hoverMiddleY) return;
        if (itemNew.index > index && hoverClientY < hoverMiddleY) return;
        console.log(hoverBoundingRect)
        
        moveIngredient(index, itemNew)

        index = itemNew.index 
    }
  });

  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: {index: index},
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const display = isDrag ? ": hidden" : ": visible";

  const ref = useRef(null);

  drag(drop(ref));

  return (
    <div
      className={styles.elementBox + first}
      ref={ref}
      style={{ display }}
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
