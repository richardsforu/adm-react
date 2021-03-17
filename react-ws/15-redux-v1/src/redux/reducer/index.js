import todos from "./todos";
import {combineReducers} from 'redux'
import visibilityFilter from "./VisibilityFilter";
const rootReducer=combineReducers({
  todos,
  visibilityFilter
})

export default rootReducer