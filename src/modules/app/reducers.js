import { APP_INITIATE } from './index'

const initialState = {
    init: false
}

const app = (state = initialState, action) => {
    switch (action.type) {
      case APP_INITIATE:
        return {
          ...state,
          init: !state.init
        }
      default:
        return state
    }
  }

  export default app