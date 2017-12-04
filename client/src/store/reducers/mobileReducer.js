import * as actionTypes from '../actions/ActionTypes'

const initialState = {
  mobileOpen: false
}

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        mobileOpen: !state.mobileOpen
      }
    default:
      return state
  }
}

export default mobileReducer
