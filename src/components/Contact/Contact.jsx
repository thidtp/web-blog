import React, { useState } from "react";
import { init, send } from "emailjs-com";
import ContactImg from "../../assets/images/contact-us.gif";
import ContactImg3 from "../../assets/images/contact-gif_e285.gif";
import "./Contact.css";

init("2IPErRjGqgDejWnvJ");

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };
        console.log(templateParams);
        send("doan_123", "template_hxtltdp", templateParams)
            .then((response) => {
                console.log("Email sent successfully", response);
                setStatus("Message sent successfully! You'll receive a confirmation email shortly.");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus(""), 3000);
                

                send("doan_123", "template_taxkip6", templateParams)
                    .then(() => {
                        console.log("Auto-reply sent!");
                    })
                    .catch((err) => {
                        console.error("Error sending auto-reply", err);
                    });
            })
            .catch((err) => {
                console.error("Error sending email", err);
                setStatus("Oops! Something went wrong. Please try again.");
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <div className="contact-intro">
                    <img src={ContactImg} alt="Logo-Contact" />
                    <h2 className="contact-title">Liên hệ với chúng tôi</h2>
                    <p className="contact-text">
                        Nếu bạn muốn liên hệ để làm đồ án, đặt câu hỏi hoặc cần thêm thông tin, hãy điền thông tin vào biểu mẫu để chúng tôi có thể hỗ trợ bạn sớm nhất.
                    </p>
                </div>
                <div className="contact-items">
                    <div className="contact-info">
                        <h2 className="contact-info-title">Gửi thông tin</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="contact-form-group">
                                <label htmlFor="name">Họ Tên</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="message">Nội dung</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Gửi</button>
                        </form>
                        {status && <p>{status}</p>}
                    </div>
                    <div className="contact-image">
                        <img src={ContactImg3} alt="Logo-Contact1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
