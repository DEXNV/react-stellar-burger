export const ORDER_REQUEST = 'ORDER_REQUEST'
export const ORDER_SUCCESS = 'ORDER_SUCCESS'
export const ORDER_FAILURE = 'ORDER_FAILURE'

export const orderRequest = () => ({ type: ORDER_REQUEST })
export const orderSuccess = (requestData) => ({ type: ORDER_SUCCESS, order: requestData })
export const orderFailure = (requestData) => ({ type: ORDER_FAILURE, message: requestData.message })