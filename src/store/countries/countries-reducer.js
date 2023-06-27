import axios from "axios";

import { useDispatch } from "react-redux";

const initialState = {
    status: "idle",
    list: [],
    error: null,
    currentCountry: null,
    borders: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                list: payload,
                status: "completed",
                error: null,
            };
        case "SET_LOADING":
            return { ...state, status: "loading" };
        case "SET_ERROR":
            return { ...state, error: payload, status: "rejected" };
        case "SET_CURRENT_COUNTRY":
            return { ...state, currentCountry: payload };
        case "SET_CURRENT_BORDERS":
            return { ...state, borders: payload };

        default:
            return state;
    }
};

const setCurrentCountry = (country) => ({
    type: "SET_CURRENT_COUNTRY",
    payload: country,
});
const setCurrentBorders = (country) => ({
    type: "SET_CURRENT_BORDERS",
    payload: country,
});

const setCountries = (countries) => ({
    type: "GET_COUNTRIES",
    payload: countries,
});
const setLoading = () => ({
    type: "SET_LOADING",
});
const setError = (err) => ({
    type: "SET_ERROR",
    payload: err,
});

export const getCountriesThunk =
    () =>
    (dispatch, _, { client, api }) => {
        dispatch(setLoading());
        client
            .get(api.ALL_COUNTRIES)
            .then((res) => dispatch(setCountries(res.data)))
            .catch((err) => dispatch(setError(err.message)));
    };

export const getCurrentCountryThunk =
    (name) =>
    (dispatch, _, { client, api }) => {
        client.get(api.searchByCountry(name)).then((res) => {
            dispatch(setCurrentCountry(res.data[0]));
        });
    };

export const getCurrentCountryByCodeThunk =
    (codes) =>
    (dispatch, _, { client, api }) => {
        client
            .get(api.filterByCode(codes))
            .then((res) => dispatch(setCurrentBorders(res.data)));
    };
