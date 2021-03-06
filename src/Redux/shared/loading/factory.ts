import { useDispatch } from "react-redux";

import {
  makeUseSelectIsLoading,
  makeUseSelectIsLoadSuccessful,
  makeUseSelectIsLoadFailure,
} from "./hooks";
import { makeThunkLoading } from "./thunks";

export const loadFactory = ({
  id,
  loadFunction,
}: {
  id: string;
  loadFunction: () => Promise<void>;
}) => {
  const useSelectIsLoading = makeUseSelectIsLoading(id);
  const useSelectIsLoadSuccessul = makeUseSelectIsLoadSuccessful(id);
  const useSelectIsLoadFailure = makeUseSelectIsLoadFailure(id);
  const useSelectHasAttemptedLoad = () => {
    const loading = useSelectIsLoading();
    const success = useSelectIsLoadSuccessul();
    const failure = useSelectIsLoadFailure();
    return loading || success || failure;
  };

  const thunkLoad = makeThunkLoading({
    id,
    loadFunction,
  });
  const useLoad = () => {
    const dispatch = useDispatch();
    const hasAttemptedLoad = useSelectHasAttemptedLoad();
    if (!hasAttemptedLoad) {
      dispatch(thunkLoad);
    }
  };

  return {
    thunkLoad: thunkLoad,
    useLoad,
    useSelectIsLoading,
    useSelectIsLoadSuccessul,
    useSelectIsLoadFailure,
  };
};
