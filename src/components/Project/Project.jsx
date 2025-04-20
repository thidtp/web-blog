import React from "react";
import ProjectImg from "../../assets/images/project-logo.gif";
import "./Project.css";
import { projectContent } from "../../constants/Project";
const Project = () => {
    return (
        <section className="project" id="project">
            <div className="project-content">
                <div className="project-intro">
                    <img src={ProjectImg} alt="Logo-Project" />
                    <h2 className="about-title">Một vài sản phẩm đáng tự hào</h2>
                    <p className="about-text">Đây là những dự án thực tế mà chúng tôi đã triển khai, trải dài trên nhiều lĩnh vực và nền tảng khác nhau. Mỗi sản phẩm không chỉ thể hiện chất lượng và kinh nghiệm, mà còn là minh chứng cho sự uy tín mà chúng tôi luôn cam kết mang đến cho sinh viên.</p>
                </div>
                <div className="project-list">
                {projectContent.map((item, index) => (
                    <div className="project-item-content" key={index}>
                        <img src={item.image} alt={item.title} className="project-image" />
                        <h3 className="project-title">{item.title}</h3>
                        <p className="project-description">{item.description}</p>
                        <div className="project-technologies">
                            {item.technologies && item.technologies.map((tech, index) => (
                                <span key={index} className="project-technology">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
export default Project;