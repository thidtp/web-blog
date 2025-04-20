import React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/images/logo.gif";
import "./Header.css";
const Header = () => {
    return(
        <section className="header" id="header">
            <Link to="home" className="logo-header">
                <img src={Logo} alt="Logo-Header" />
            </Link>
            <nav className="nav_header">
                <Link to="home" smooth = {true} duration = {500} offset={-100} className="home active">Trang Chủ</Link>
                <Link to="about" smooth = {true} duration = {500} offset={-70} className="about">Giới Thiệu</Link>
                <Link to="project" smooth = {true} duration = {500} offset={-100}  className="">Dự Án</Link>
                <Link to="contact" smooth = {true} duration = {500} offset={-100}  className="nav_link_header">Liên Hệ</Link>
            </nav>
        </section>
    )
}
export default Header;