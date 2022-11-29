import { combineReducers } from "@reduxjs/toolkit";

import session from "./session";

const rootReducer = combineReducers({
  session: session
});

export default rootReducer;
