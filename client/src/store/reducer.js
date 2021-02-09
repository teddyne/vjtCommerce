import { ADD_TO_CARTS } from '../store/action'

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CARTS:
            return {
                ...state,
                carts: state.carts.concat(action.payload)
            }
        default:
            return state
    }
}
export default Reducer