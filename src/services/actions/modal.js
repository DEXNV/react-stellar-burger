export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const openModal = (requestData) => ({ type: MODAL_OPEN, ingredient: requestData})
export const closeModal = () => ({ type: MODAL_CLOSE })