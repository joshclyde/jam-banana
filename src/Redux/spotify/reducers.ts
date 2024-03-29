import { combineReducers } from "redux";

import { reducers as devicesReducers } from "./devices/reducers";
import { reducers as playerReducers } from "./player/reducers";
import { reducers as searchResultsReducers } from "./searchResults/reducers";
import { reducers as simplifiedAlbumsReducers } from "./simplifiedAlbums/reducers";
import { reducers as spotifyAccessTokenReducers } from "./spotifyAccessToken/reducers";
import { reducers as trackReducers } from "./tracks/reducers";

const spotify = combineReducers({
  ...devicesReducers,
  ...searchResultsReducers,
  ...spotifyAccessTokenReducers,
  ...playerReducers,
  ...simplifiedAlbumsReducers,
  ...trackReducers,
});

export const reducers = {
  spotify,
};
