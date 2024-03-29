import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "../../types";

import {
  makeActionSetSharedLoadingInitiate,
  makeActionSetSharedLoadingSuccess,
  makeActionSetSharedLoadingFailure,
} from "./actions";

export const makeThunkLoading = ({
  id,
  loadFunction,
}: {
  id: string;
  loadFunction: () => Promise<void>;
}): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  dispatch(makeActionSetSharedLoadingInitiate(id));
  try {
    await loadFunction();
    dispatch(makeActionSetSharedLoadingSuccess(id));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(id, error));
  }
};
