import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useDispatch, useSelector } from "react-redux";
import {
    selectAllCountries,
    selectNameCountries,
    selectRegionCountries,
} from "./../store/countries/countries-selectors";
import { useEffect } from "react";
import { getCountriesThunk } from "../store/countries/countries-reducer";

export const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nameFilter = useSelector((state) => state.search);
    const regionFilter = useSelector((state) => state.region);
    const countries = useSelector((state) =>
        selectRegionCountries(state, regionFilter)
    );

    const filteredCountries = useSelector((state) =>
        selectNameCountries(countries, nameFilter)
    );

    useEffect(() => {
        dispatch(getCountriesThunk());
    }, []);
    console.log(filteredCountries);
    return (
        <>
            <Controls />

            <List>
                {filteredCountries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: "Population",
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: "Region",
                                description: c.region,
                            },
                            {
                                title: "Capital",
                                description: c.capital,
                            },
                        ],
                    };

                    return (
                        <Card
                            key={c.name}
                            onClick={() => navigate(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
        </>
    );
};
