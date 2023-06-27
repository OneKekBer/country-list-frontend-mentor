import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import axios from "axios";
import * as api from "../config";

import { persistStore, persistReducer } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({ client: axios, api }))
    )
);

export const persistor = persistStore(store);
