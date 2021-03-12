import { 
    ADD_TO_CARTS,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY
} from '../store/action'

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CARTS:
            return {
                ...state,
                carts: state.carts.concat(action.payload)
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
        default:
            return state
    }
}
export default Reducer