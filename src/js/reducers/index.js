import { combineReducers } from "redux"

import notes from "./notesReducer"
import ui from "./uiReducer"


export default combineReducers({
    notes,
    ui
})

