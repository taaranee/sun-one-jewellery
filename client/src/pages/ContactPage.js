import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    border: '1px solid #EAE0CE', borderRadius: '6px',
    fontSize: '14px', outline: 'none',
    fontFamily: 'Poppins, sans-serif',
    background: '#fff'
  };

  const labelStyle = {
    display: 'block', fontSize: '13px',
    color: '#2B2118', marginBottom: '8px', fontWeight: '500'
  };

  return (
    <div style={{ background: '#fff' }}>
      {/* Header */}
      <div style={{
        background: '#FAF6EF', padding: '50px 60px',
        textAlign: 'center', borderBottom: '1px solid #EAE0CE'
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '2.2rem', color: '#2B2118', marginBottom: '12px'
        }}>Contact Us</h1>
        <div style={{ width: '50px', height: '2px', background: '#C8862A', margin: '0 auto 16px' }} />
        <p style={{ color: '#6B5D4F', fontSize: '14px', maxWidth: '500px', margin: '0 auto' }}>
          We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>

      <div style={{
        padding: '60px', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: '60px',
        maxWidth: '1100px', margin: '0 auto'
      }}>
        {/* Contact Form */}
        <div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.5rem', color: '#2B2118', marginBottom: '28px'
          }}>Send a Message</h2>

          {sent && (
            <div style={{
              background: '#f0f9f0', border: '1px solid #c3e6c3',
              borderRadius: '8px', padding: '14px 18px',
              color: '#2B7A2B', fontSize: '13px', marginBottom: '24px'
            }}>
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '18px' }}>
              <label style={labelStyle}>Your Name</label>
              <input type="text" name="name" placeholder="Enter your name"
                value={form.name} onChange={handleChange}
                required style={inputStyle} />
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label style={labelStyle}>Email Address</label>
              <input type="email" name="email" placeholder="Enter your email"
                value={form.email} onChange={handleChange}
                required style={inputStyle} />
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label style={labelStyle}>Phone Number</label>
              <input type="tel" name="phone" placeholder="Enter your phone"
                value={form.phone} onChange={handleChange}
                style={inputStyle} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Message</label>
              <textarea name="message" placeholder="Write your message here..."
                value={form.message} onChange={handleChange}
                required rows={5}
                style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <button type="submit" className="btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '14px' }}>
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.5rem', color: '#2B2118', marginBottom: '28px'
          }}>Get in Touch</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                icon: <FaPhone style={{ color: '#C8862A', fontSize: '18px' }} />,
                title: 'Phone',
                info: '+91 98765 43210',
                sub: 'Mon - Sat, 9am - 6pm'
              },
              {
                icon: <FaEnvelope style={{ color: '#C8862A', fontSize: '18px' }} />,
                title: 'Email',
                info: 'support@sunjewellery.com',
                sub: 'We reply within 24 hours'
              },
              {
                icon: <FaMapMarkerAlt style={{ color: '#C8862A', fontSize: '18px' }} />,
                title: 'Address',
                info: 'Sun One Gram Jewellery',
                sub: 'Mumbai, Maharashtra, India 400001'
              },
              {
                icon: <FaClock style={{ color: '#C8862A', fontSize: '18px' }} />,
                title: 'Business Hours',
                info: 'Monday - Saturday',
                sub: '9:00 AM - 6:00 PM IST'
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '16px',
                padding: '20px', background: '#FAF6EF',
                borderRadius: '10px', border: '1px solid #EAE0CE'
              }}>
                <div style={{
                  width: '44px', height: '44px',
                  background: '#fff', borderRadius: '50%',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                  border: '1px solid #EAE0CE'
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: '#C8862A', fontWeight: '600', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '14px', color: '#2B2118', fontWeight: '500', marginBottom: '2px' }}>
                    {item.info}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6B5D4F' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;