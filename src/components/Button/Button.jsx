import React from "react";
import { Link } from "react-scroll";
import "./Button.css";

const Button = () => {
    return(
        <div className="container1">
            <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="button type--C"
            >
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">LIÊN HỆ NGAY</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
            </Link>
        </div>
    )
}
export default Button;
