import PropTypes from 'prop-types';

import style from './ingredient-details.module.css'

function IngredientDetails(props) {

    return (
        <div>
            <img className={'mb-4 ' + style.img} src={props.image_large} alt={props.name}></img>
            <h2 className={"text text_type_main-medium mb-8 " + style.center}>{props.name}</h2>
            <ul className={style.tab}>
                <li className={"text_color_inactive " + style.center}>
                    <p className='text text_type_main-default mb-2'>Калории, ккал</p>
                    <p className='text text_type_digits-default'>{props.calories}</p>
                </li>
                <li className={"text_color_inactive " + style.center}>
                    <p className='text text_type_main-default mb-2'>Белки, г</p>
                    <p className='text text_type_digits-default'>{props.proteins}</p>
                </li>
                <li className={"text_color_inactive " + style.center}>
                    <p className='text text_type_main-default mb-2'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{props.fat}</p>
                </li>
                <li className={"text_color_inactive " + style.center}>
                    <p className='text text_type_main-default mb-2'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{props.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}



export default IngredientDetails;