import React from "react";

export default function ContactSectionContent() {
  return (
    <div className="contact-grid">
      <div className="card">
        <h4>Contact Details</h4>
        <p className="muted">Email</p>
        <p>mdzulhasuddin95@email.com</p>
        <p className="muted" style={{ marginTop: 12 }}>
          Location
        </p>
        <p>Dhaka, Bangladesh</p>
      </div>

      <div className="card">
        <h4>Message Me</h4>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            const subject = encodeURIComponent(`Portfolio contact from ${name || "Someone"}`);
            const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:mdzulhasuddin95@email.com?subject=${subject}&body=${body}`;
          }}
        >
          <label>
            Name
            <input name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@email.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Write your message..." />
          </label>
          <button className="btn primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

