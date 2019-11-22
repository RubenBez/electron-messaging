import { systemReducer } from "./system/reducer";
import { chatReducer } from "./chat/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;
