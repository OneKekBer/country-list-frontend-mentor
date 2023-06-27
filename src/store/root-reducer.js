import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries-reducer";
import { regionReducer } from "./region-filter/region-reducer";
import { searchReducer } from "./search/search-reducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    region: regionReducer,
    search: searchReducer,
});
