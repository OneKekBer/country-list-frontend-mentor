import styled from "styled-components";

import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { addRegionFilter } from "../store/region-filter/region-reducer";

const optionsMap = {
    Africa: { value: "Africa", label: "Africa" },
    America: { value: "Americas", label: "Americas" },
    Asia: { value: "Asia", label: "Asia" },
    Europe: { value: "Europe", label: "Europe" },
    Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Controls = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.region);

    return (
        <Wrapper>
            <Search />
            <CustomSelect
                options={options}
                placeholder={
                    currentFilter.length === 0
                        ? "Filter by Region"
                        : currentFilter
                }
                isClearable
                isSearchable={false}
                value={""}
                onChange={(e) => {
                    dispatch(addRegionFilter(e.value));
                }}
            />
        </Wrapper>
    );
};
