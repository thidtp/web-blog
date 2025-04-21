import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
import './Hero.css';
import Button1 from "../Button/Button";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
const Hero = () => {
    return(
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">Đồng hành cùng sinh viên chinh <br /> phục đồ án</h1>
                <p className="hero-text">Nhận hỗ trợ thực hiện đồ án theo yêu cầu |  Nhiều <br />  nền tảng | Đảm bảo đúng tiến độ</p>
                <Button1 />
                {/* <Button LinkComponent={Link} to="contact" smooth = {true} duration = {500} offset={-100} sx={{ boxShadow: 'none','&:focus': {outline: 'none',},'&:focus-visible': {outline: 'none',boxShadow: 'none',},}} variant="contained" className="hero-btn">Liên Hệ Ngay</Button> */}
                <ScrollArrow />
            </div>
        </section>
    )
}
export default Hero;