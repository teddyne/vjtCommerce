import { 
    ADD_TO_CARTS,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    SET_CURRENT_USER,
    SET_LOADING,
    LOG_OUT,
    SET_LOADING_BAR
} from '../store/action'

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CARTS:
             return {
                 ...state,
                 carts: [...state.carts, action.payload]
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
        case LOG_OUT:
            return {
                ...state,
                currentUser: null
            }      
        case SET_LOADING_BAR:
            return {
                 ...state,
                 progress: action.payload
            }    
        default:
            throw new Error()
    }
}
export default Reducer