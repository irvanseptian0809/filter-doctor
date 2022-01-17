import { combineReducers } from 'redux'
import doctors from '../ducks/doctors'

const appReducers = combineReducers({
  doctors,
})

const rootReducers = (state: any, action: any) => {
  return appReducers(state, action)
}

export default rootReducers
