import ModalOverlayStyles from './modalOverlay.module.css'
import PropTypes from 'prop-types';

export default function ModalOverlay(props) {
    return (
        <div className={ModalOverlayStyles.main}
        onClick={() => {props.toggleModal({ isVisible: false })}}></div>
    )
}

ModalOverlay.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

