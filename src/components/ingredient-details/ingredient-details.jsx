import PropTypes from 'prop-types';
import { BurgerPropTypes } from '../../utils/data';
import style from './ingredient-details.module.css'

const IngredientDetails = (props) => {
    return (
        <div>
            <img className={'mb-4 ' + style.img} src={props.ingredient.image_large} alt={props.ingredient.name}></img>
            <h2 className={"text text_type_main-medium mb-8 " + style.center}>{props.ingredient.name}</h2>
            <ul className={style.tab}>
                <li className={"text_color_inactive " + style.center}>
                    <p className='text text_type_main-default mb-2'>Калории, ккал</p>
                    <p className='text text_type_digits-default'>{props.ingredient.calories}</p>
                </li>
                <li className={"text_color_inactive " + style.center}>
                    <p className='text text_type_main-default mb-2'>Белки, г</p>
                    <p className='text text_type_digits-default'>{props.ingredient.proteins}</p>
                </li>
                <li className={"text_color_inactive " + style.center}>
                    <p className='text text_type_main-default mb-2'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{props.ingredient.fat}</p>
                </li>
                <li className={"text_color_inactive " + style.center}>
                    <p className='text text_type_main-default mb-2'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{props.ingredient.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}

IngredientDetails.propTypes = {
    _id: PropTypes.string, //Снова ругается на функцию, поэтому закодил напрямую
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number, 
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string 
}



export default IngredientDetails;