import { createPortal } from 'react-dom';
import styles from './modal.module.css'
import cross from '../images/cross 24x24.svg'
import ModalOverlay from '../components/modal-overlay/modalOverlay';
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const Modal = (props) => {

    useEffect(() => {
        const closeModal = (evt) => {
            if (evt.keyCode === 27) {
                props.toggleModal({isVisible: false})
            }
        }
        window.addEventListener('keydown', closeModal)
        return () => window.removeEventListener('keydown', closeModal)
    }, []);

    return createPortal(
        <div style={{ visibility: props.isVisible ? 'visible' : 'hidden'}}>
            <ModalOverlay toggleModal={props.toggleModal} />
            <section className={'pt-10 pb-15 ' + styles.section}>
                <div className={styles.title}>
                    <h1 className="text text_type_main-large">{props.heading}</h1>
                    <img className={styles.icon} src={cross}
                        onClick={() => (props.toggleModal({isVisible: false}))}>
                    </img>
                </div>
                {props.children(props.props)}
            </section>
        </div>, document.querySelector('#root')
    )
}

Modal.propTypes = {
    props: PropTypes.object,
    isVisible: PropTypes.bool,
    toggleModal: PropTypes.func,
    heading: PropTypes.string
}
