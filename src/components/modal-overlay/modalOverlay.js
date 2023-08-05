import ModalOverlayStyles from './modalOverlay.module.css'

export default function ModalOverlay(props) {
    return (
        <div className={ModalOverlayStyles.main}
        onClick={() => {props.toggleModal({ isVisible: false })}}></div>
    )
}

