import { createPortal } from 'react-dom';
import styles from './modal.module.css'
import cross from '../images/cross 24x24.svg'
import ModalOverlay from '../components/modal-overlay/modalOverlay';
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { BurgerPropTypes } from '../utils/data';

const closeModalOnKey = (evt, props, key) => {
    console.log(evt.key)
    if (evt.key === key) {
        closeModal(props)
    }
}

const closeModal = (props) => {
    props.toggleModal({isVisible: false})
}

export const Modal = (props) => {

    useEffect(() => {
        window.addEventListener('keydown', (evt) => closeModalOnKey(evt, props, "Escape"))
        return () => window.removeEventListener('keydown', closeModal)
    }, []);

    return createPortal(
        <div style={{ visibility: props.isVisible ? 'visible' : 'hidden'}}>
            <ModalOverlay toggleModal={props.toggleModal} />
            <section className={'pt-10 pb-15 ' + styles.section}>
                <div className={styles.title}>
                    <h1 className="text text_type_main-large">{props.heading}</h1>
                    <img className={styles.icon} src={cross}
                        onClick={() => closeModal(props)}>
                    </img>
                </div>
                {props.children(props.props)}
            </section>
        </div>, document.querySelector('#modals')
    )
}

Modal.propTypes = {
    //Тут вообще мистика происходила, оставил так
    props: PropTypes.object.isRequired,
    isVisible: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    heading: PropTypes.string
}
