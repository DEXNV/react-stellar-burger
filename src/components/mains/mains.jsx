import { useRef } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./mains.module.css";
import { useDrag, useDrop } from "react-dnd";
import defaultImage from "../../images/defaultImage.png"

export const Mains = ({ deleteIngredient, item, first, moveIngredient, index }) => {

  const defaultMain = item._id !== "0"
  const visibility = defaultMain? "visible" : "hidden"

  const [, drop] = useDrop({
    accept: "ingredient",
    hover: (itemNew, monitor) => {
        if (!ref.current) return;

        const dragIndex = itemNew.index
        const hoverIndex = index

        if(index == itemNew.index) return 

        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

        moveIngredient(dragIndex, hoverIndex)

        itemNew.index = hoverIndex
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
      <button className={styles.dragDots} style={{visibility: visibility}}/>
      {!defaultMain && <ConstructorElement
        text={item.name}
        price={"?"}
        isLocked={true}
        extraClass="ml-2 mr-2"
        thumbnail={defaultImage}
        handleClose={() => deleteIngredient(item)}
      /> || 
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        extraClass="ml-2 mr-2"
        handleClose={() => deleteIngredient(item)}
      />}
    </div>
  );
};
