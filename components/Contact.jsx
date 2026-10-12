
import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    const subject = encodeURIComponent(
      `Portfolio message from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:olaoluwatestimonyola@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <div className="contact-container">
        <p className="contact-eyebrow">LET'S TALK</p>

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p className="contact-description">
          Have a project idea or want to work together?
          Send me a message. I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's create something amazing.</h3>

            <p>
              I'm a frontend developer passionate about
              creating modern and responsive websites.
            </p>

            <div className="contact-detail">
              <span className="contact-icon">✉</span>

              <div>
                <h4>Email</h4>
                <a
                  className="contact-link"
                  href="mailto:olaoluwatestimonyola@gmail.com"
                >
                  olaoluwatestimonyola@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">📞</span>

              <div>
                <h4>Phone</h4>
                <a
                  className="contact-link"
                  href="tel:+2347076704063"
                >
                  07076704063
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">💻</span>

              <div>
                <h4>Speciality</h4>
                <p>Frontend Development</p>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="contact-name">
              Your Name
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="contact-email">
              Your Email
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="contact-message">
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            />

            <button
              type="submit"
              className="contact-button"
            >
              Send Message <span>→</span>
            </button>

            <p className="form-note">
              Clicking Send Message opens your email app
              with your message prepared for sending.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
