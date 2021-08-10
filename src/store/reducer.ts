import * as ReduxToolkit from "@reduxjs/toolkit"
import * as Entities from "./entities"
import * as Ui from "./ui"

export const reducer = ReduxToolkit.combineReducers({
  entities: Entities.reducer,
  ui: Ui.reducer,
})
