import { combineReducers } from "redux";

import fabReducer from "./fab/reducer";

export default combineReducers({
  fab: fabReducer
});

//export type RootState = ReturnType<typeof rootReducer>;
