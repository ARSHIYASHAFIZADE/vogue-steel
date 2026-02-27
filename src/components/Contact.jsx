import React, { useState, useRef, useEffect } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCopy,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import "./Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState({ phone: false, email: false });
  const [messageChars, setMessageChars] = useState(0);

  const messageMax = 1000;
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setMessageChars(form.message.length);
  }, [form.message]);

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!form.email.trim()) errors.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Please enter a valid email.";
    if (!form.subject.trim()) errors.subject = "Subject is required.";
    if (!form.message.trim()) errors.message = "Please add a message.";
    if (form.message.length > messageMax) errors.message = `Message must be under ${messageMax} characters.`;
    if (form.honeypot) errors.honeypot = "Spam detected.";
    return errors;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleBlur(e) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true, honeypot: true });

    if (!isValid) {
      setStatus({ type: "error", message: "Please fix the errors in the form." });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const resp = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!resp.ok) {
        throw new Error("Submission failed");
      }

      if (isMounted.current) {
        setStatus({ type: "success", message: "Thanks! Your message was sent." });
        setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
        setTouched({});
      }
    } catch (err) {
      if (isMounted.current) {
        setStatus({
          type: "error",
          message: "There was a problem sending your message. Please try again later.",
        });
      }
    } finally {
      if (isMounted.current) setSubmitting(false);
    }
  }

  function quickCall() {
    window.location.href = "tel:+97165262843";
  }

  function quickEmail() {
    window.location.href = "mailto:info@vogue-steel.com";
  }

  async function copyToClipboard(text, key) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((c) => ({ ...c, [key]: true }));
      setTimeout(() => setCopied((c) => ({ ...c, [key]: false })), 2000);
    } catch (e) {
      setStatus({ type: "error", message: "Copy failed. Please copy manually." });
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">We'd love to hear from you. Send us a message or visit our office.</p>
        </header>

        <div className="contact-grid">
          {/* Left Column: Info & Map */}
          <div className="contact-left">

            {/* Contact Info Card */}
            <div className="info-card">
              <h2 className="card-title">Contact Information</h2>

              <div className="info-item">
                <div className="icon-box"><FaPhoneAlt /></div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <div className="actions-row">
                    <a href="tel:+97165262843" className="info-link">+971 6 526 2843</a>
                    <button onClick={() => copyToClipboard("+97165262843", "phone")} className="copy-btn" title="Copy">
                      {copied.phone ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><FaEnvelope /></div>
                <div className="info-content">
                  <h3>Email</h3>
                  <div className="actions-row">
                    <a href="mailto:info@vogue-steel.com" className="info-link">info@vogue-steel.com</a>
                    <button onClick={() => copyToClipboard("info@vogue-steel.com", "email")} className="copy-btn" title="Copy">
                      {copied.email ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>P.O.BOX: 33736, Industrial Area 15, Sharjah, UAE.</p>
                </div>
              </div>


            </div>

            {/* Map Card */}
            <div className="map-card">
              <iframe
                title="Vogue Steel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.876555998787!2d55.4123419150412!3d25.315066983844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b0c5f5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sIndustrial%20Area%2015%2C%20Sharjah!5e0!3m2!1sen!2sae!4v1729267890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-right">
            <div className="form-card">
              <h2 className="card-title">Send Message</h2>
              <form onSubmit={handleSubmit} noValidate>
                <input type="text" name="honeypot" className="honeypot" value={form.honeypot} onChange={handleChange} />

                <div className="form-row">
                  <div className={`form-group ${touched.name && errors.name ? 'error' : ''}`}>
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your Full Name" />
                    {touched.name && errors.name && <span className="error-msg">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${touched.email && errors.email ? 'error' : ''}`}>
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="your@email.com" />
                    {touched.email && errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className={`form-group ${touched.subject && errors.subject ? 'error' : ''}`}>
                  <label>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} onBlur={handleBlur} placeholder="Project Inquiry" />
                  {touched.subject && errors.subject && <span className="error-msg">{errors.subject}</span>}
                </div>

                <div className={`form-group ${touched.message && errors.message ? 'error' : ''}`}>
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} onBlur={handleBlur} placeholder="Tell us about your project..." maxLength={messageMax} />
                  <div className="char-count">{messageChars}/{messageMax}</div>
                  {touched.message && errors.message && <span className="error-msg">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? <><FaSpinner className="spin" /> Sending...</> : "Send Message"}
                </button>

                {status && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}