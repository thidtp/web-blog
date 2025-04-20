import React from "react";
import { Element } from "react-scroll";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
    return (
        <>
        <Element name="hero" className="hero" id="home">
            <Hero />
        </Element>
        <Element name="about" className="about" id="about">
            <About />
        </Element>
        <Element name="project" className="project" id="project">
            <Project />
        </Element>
        <Element name="contact" className="contact" id="contact">
            <Contact />
        </Element>
        </>
    )
}

export default HomePage;