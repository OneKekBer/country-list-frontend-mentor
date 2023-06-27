export const searchReducer = (state = "", { type, payload }) => {
    switch (type) {
        case "SET_SEARCH":
            return payload;

        default:
            return state;
    }
};

export const setSearch = (search) => ({
    type: "SET_SEARCH",
    payload: search,
});
