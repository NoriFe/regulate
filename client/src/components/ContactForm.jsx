import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Sorry, there was a problem. Please try again later.");
      }
    } catch {
      setStatus("Sorry, there was a problem. Please try again later.");
    }
  };

  return (
    <form
      className="contact-form-unique"
      onSubmit={handleSubmit}
      style={{
        background: "linear-gradient(135deg, #f7e8d5 60%, #c995a4 100%)",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px rgba(201, 149, 164, 0.18)",
        padding: "2rem 3.5rem",
        maxWidth: 650, // wider for large screens
        width: "100%",
        margin: "2rem auto 0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      <label htmlFor="name" style={{ fontWeight: 700, color: "#15263f", fontSize: "1rem", alignSelf: "flex-start" }}>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        required
        style={{
          border: "1.5px solid #c995a4",
          borderRadius: "0.7rem",
          padding: "0.7rem 1rem",
          fontSize: "1rem",
          width: "100%",
          maxWidth: 500, // wider fields
        }}
      />
      <label htmlFor="email" style={{ fontWeight: 700, color: "#15263f", fontSize: "1rem", alignSelf: "flex-start" }}>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        style={{
          border: "1.5px solid #c995a4",
          borderRadius: "0.7rem",
          padding: "0.7rem 1rem",
          fontSize: "1rem",
          width: "100%",
          maxWidth: 500
        }}
      />
      <label htmlFor="message" style={{ fontWeight: 700, color: "#15263f", fontSize: "1rem", alignSelf: "flex-start" }}>Message</label>
      <textarea
        id="message"
        name="message"
        rows={6}
        value={form.message}
        onChange={handleChange}
        required
        style={{
          border: "1.5px solid #c995a4",
          borderRadius: "0.7rem",
          padding: "0.7rem 1rem",
          fontSize: "1rem",
          width: "100%",
          maxWidth: 500,
          resize: "vertical",
        }}
      />
      <button
        type="submit"
        style={{
          background: "#c995a4",
          color: "#fff",
          border: "none",
          borderRadius: "0.7rem",
          padding: "1.1rem 1.5rem",
          fontWeight: 800,
          fontSize: "1.15rem",
          letterSpacing: "0.04em",
          boxShadow: "0 2px 8px rgba(201, 149, 164, 0.12)",
          cursor: "pointer",
          width: "100%",
          maxWidth: 500
        }}
      >
        Send
      </button>
      {status && (
        <p
          style={{
            marginTop: "0.5rem",
            color: status.startsWith("Thank") ? "#4caf50" : "#c47e6e",
            fontWeight: 600,
            fontSize: "1.05rem",
            textAlign: "center",
            width: "100%",
            maxWidth: 500,
          }}
        >
          {status}
        </p>
      )}
    </form>
  );
}
