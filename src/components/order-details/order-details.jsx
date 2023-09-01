import PropTypes from 'prop-types';
import style from './order-details.module.css'
import done from '../../images/doneOrder.svg'

export default function OrderDetails(props) {
    
    return (
        <div className={style.div}>
            <h1 className={"text text_type_digits-large mb-8 " + style.number}>{props.number}</h1>
            <h3 className="text text_type_main-medium mb-15">идентификатор заказа</h3>
            <img className="text text_type_main-medium mb-15" src={done}></img>
            <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

OrderDetails.propTypes = {
    number: PropTypes.string
}
