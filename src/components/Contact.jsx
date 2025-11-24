import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Get In Touch</h2>

      <div className="contact-card">
        <div className="contact-links">
          <a
            href="mailto:vinayakdhaka94@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="contact-icon"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M12 12.713l11.985-8.713H0.015L12 12.713z"
              />
              <path
                fill="#4285F4"
                d="M12 12.713l-12-8.713V19.5a2.5 2.5 0 002.5 2.5h19a2.5 2.5 0 002.5-2.5V3.999l-12 8.714z"
              />
              <path
                fill="#fff"
                d="M0 4.5l12 8.713L24 4.5v-.5a2 2 0 00-2-2H2a2 2 0 00-2 2v.5z"
              />
              <path
                fill="#4285F4"
                d="M12 12.713L0 4.5v15a2 2 0 002 2h2V8.713l8 6z"
              />
              <path
                fill="#4285F4"
                d="M12 12.713l12-8.213v15a2 2 0 01-2 2h-2V8.713l-8 6z"
              />
            </svg>
            <span>Email: bhargavireddymakashi653@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bhargavi-reddy-b440162b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="contact-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M8 11v5M8 8h.01M12 16v-5a2 2 0 1 1 4 0v5" />
            </svg>
            <span>LinkedIn: Bhargavireddy</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
