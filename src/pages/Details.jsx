import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentCountryThunk } from "./../store/countries/countries-reducer";

export const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentCountry = useSelector(
        (state) => state.countries.currentCountry
    );
    // console.log(currentCountry);
    console.log(currentCountry);

    useEffect(() => {
        dispatch(getCurrentCountryThunk(name));
    }, [name, dispatch]);

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>

            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </div>
    );
};
