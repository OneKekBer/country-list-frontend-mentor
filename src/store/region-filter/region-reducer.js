export const regionReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "ADD_REGION_FILTER":
            return payload;

        default:
            return state;
    }
};

export const addRegionFilter = (filter) => ({
    type: "ADD_REGION_FILTER",
    payload: filter,
});
