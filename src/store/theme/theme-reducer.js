export const themeReducer = (state = "light", action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return action.payload;

        default:
            return state;
    }
};

export const toggleTheme = (theme) => ({
    type: "TOGGLE_THEME",
    payload: theme,
});
