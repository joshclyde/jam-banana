import { auth } from "./auth/reducers";
import { design } from "./design/reducers";
import { flashcard } from "./flashcard/reducers";
import { music } from "./music/reducers";
import { schedule } from "./schedule/reducers";
import { shared } from "./shared/reducers";
import { smite } from "./smite/reducers";

const reducers = {
  flashcard,
  smite,
  schedule,
  shared,
  auth,
  music,
  design,
};

export { reducers };
export * from "./flashcard";
export * from "./smite";
export * from "./shared";
export * from "./schedule";
export * from "./auth";
export * from "./music";
export * from "./youtube";
export * from "./design";
export { State } from "./types";
