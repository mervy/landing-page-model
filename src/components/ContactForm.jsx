import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import config from '../config/config';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((result) => {
                alert('Email sent successfully!');
            })
            .catch((error) => {
                alert('Failed to send email. Try again later.');
            });

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact py-5 bg-light fade-in d-flex flex-column justify-content-center align-items-center">
            <div className="container w-50">
                <h3 className="text-center mb-4">Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                        <a
                            href={`https://wa.me/${config.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success"
                        >
                            <i className="bi bi-whatsapp"></i> Contact Us on WhatsApp
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
