import { 
    ADD_TO_CARTS,
    SET_CURRENT_USER,
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
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
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