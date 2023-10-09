import { createPortal } from 'react-dom';
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../components/modal-overlay/modalOverlay';
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { BurgerPropTypes } from '../utils/data';

export const Modal = (props) => {

    const closeModal = () => {
        props.toggleModal({isVisible: false})
    }

    const isOpen = props.isVisible

    useEffect(() => {
        function closeByEscape(evt) {
            if(evt.key === 'Escape') {
              closeModal();
            }
          }
          if(isOpen) {
            document.addEventListener('keydown', closeByEscape);
            return () => {
              document.removeEventListener('keydown', closeByEscape);
            }
        }
    }, [isOpen]) 

    return createPortal(
        <div className={props.isVisible ? styles.popup_opened : styles.popup_closed} style={{ visibility: props.isVisible ? 'visible' : 'hidden'}}>
            <ModalOverlay toggleModal={props.toggleModal} />
            <section className={'pt-10 pb-15 ' + styles.section}>
                <div className={styles.title}>
                    <h1 className="text text_type_main-large">{props.heading}</h1>
                    <CloseIcon type="primary" className={styles.icon} onClick={closeModal}/>
                </div>
                {props.children}
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
