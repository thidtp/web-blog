import React from "react";
import AboutImg from "../../assets/images/about.gif";
import AboutImg1 from "../../assets/images/about-image.gif";
import { aboutContent } from "../../constants/About";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./About.css";
const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="about-intro">
                    <img src={AboutImg} alt="Logo-About" />
                    <h2 className="about-title">Chào mừng đến với Hỗ trợ Đồ án Sinh viên – Người bạn đồng hành đáng tin cậy!</h2>
                    <p className="about-text">Chúng tôi chuyên cung cấp source code mẫu và nhận thực hiện đồ án theo yêu cầu cho sinh viên. Cam kết sản phẩm chất lượng, đúng tiến độ và hỗ trợ chỉnh sửa.</p>
                </div>
                <div className="about-details">
                    <div className="about-items">
                    {aboutContent.map((item, index) => (
                        <div className="about-item" key={index}>
                            <Icon icon={item.icon} width="48" height="48" style={{ color: "#0c9bff" }} />
                            <span className="about-subtitle">{item.title}</span>
                        </div>
                    ))}
                    </div>
                    <div className="about-detail-image">
                        <img src={AboutImg1} alt="Logo-About2" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;