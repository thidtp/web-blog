import React from "react";
import { Element } from "react-scroll";
import Hero from "../components/Hero";

const HomePage = () => {
    return (
        <Element name="hero" className="hero" id="home">
            <Hero />
        </Element>
    )
}

export default HomePage;