import { SET_LOADING_BAR } from '../store/action'

export const beginLoading = (dispatch) => {
    const i = Math.floor(Math.random() * 40) + 20
    dispatch({ type: SET_LOADING_BAR, payload: i })
}
  
export const endLoading = (dispatch) => {
    dispatch({ type: SET_LOADING_BAR, payload: 100 })
}