import { configureStore } from "@reduxjs/toolkit";
import BetReducer from "../features/bet/betSlice";

export interface RootState {
  bet: {
    value: number;
  };
}

export default configureStore({
  reducer: {
    bet: BetReducer,
  },
});
