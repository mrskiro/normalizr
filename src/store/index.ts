import * as ReduxToolkit from "@reduxjs/toolkit"
import { reducer } from "./reducer"

export const store = ReduxToolkit.configureStore({ reducer })
