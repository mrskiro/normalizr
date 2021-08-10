import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Todo from "./todo"

export const reducer = ReduxToolkit.combineReducers({
  todo: Todo.reducer,
})
