import * as ReduxToolkit from "@reduxjs/toolkit"

const slice = ReduxToolkit.createSlice({
  name: "todo",
  initialState: {},
  reducers: {},
})

export const { actions, reducer } = slice
