export const selectAllCountries = (state) => state.countries.list;

export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    length: state.countries.list.length,
});

export const selectRegionCountries = (state, regionFilter) => {
    if (regionFilter.length === 0) return state.countries.list;

    const filtered = state.countries.list.filter(
        (item) => item.region === regionFilter
    );

    return filtered;
};

export const selectNameCountries = (state, nameFilter = "") => {
    if (nameFilter.length === 0) return state;

    const filtered = state.filter((item) =>
        item.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    return filtered;
};
