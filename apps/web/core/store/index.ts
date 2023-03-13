import { configureStore } from "@reduxjs/toolkit";
import BetReducer from "../feature/bet/betSlice";

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
