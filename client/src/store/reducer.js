import { 
    ADD_TO_CARTS,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    SET_CURRENT_USER,
    SET_LOADING
} from '../store/action'

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CARTS:
            return {
                ...state,
                carts: action.payload
            }
        case INCREASE_ITEM_QUANTITY:
                return {
                    ...state,
                    itemQuantity: state.itemQuantity + 1
                }
        case DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                itemQuantity: state.itemQuantity - 1
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}
export default Reducer