import React from "react";
import { Routes as RouteContainer, Route } from "react-router-dom";
import Home from "../pages/Home";
import CityResult from "../components/CityResult";


const Routes = () => {

    return (
        <RouteContainer location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/:city" element={<CityResult />} />
        </RouteContainer>
    );
};

export default Routes;

