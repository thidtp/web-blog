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
                <Link to="home" className="home active">Trang Chủ</Link>
                <Link to="about" className="about">Giới Thiệu</Link>
                <Link to="services" className="">Dự Án</Link>
                <Link to="portfolio" className="nav_link_header">Liên Hệ</Link>
            </nav>
        </section>
    )
}
export default Header;