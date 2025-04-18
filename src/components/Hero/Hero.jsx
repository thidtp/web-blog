import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
const Hero = () => {
    return(
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">Đồng hành cùng sinh viên chinh phục đồ án</h1>
                <p className="hero-text">Nhận hỗ trợ thực hiện đồ án theo yêu cầu | Nhiều nền tảng | Đảm bảo đúng tiến độ.</p>
                <Button LinkComponent={Link} to="/contact" sx={{ boxShadow: 'none','&:focus': {outline: 'none',},'&:focus-visible': {outline: 'none',boxShadow: 'none',},}} variant="contained" className="hero-btn">Liên Hệ Ngay</Button>
            </div>
        </section>
    )
}
export default Hero;