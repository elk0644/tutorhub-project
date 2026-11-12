import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || !email.includes("@") || !email.includes(".") || message.length < 10) {
      setError("Please enter a name, a valid email and a message (10+ chars).");
      return;
    }

    setError("");
    setSent(true);
  }

  if (sent) {
    return <h2>✅ Thanks {name}, we will contact you soon!</h2>;
  }

  return (
    <div>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          className="field"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="field"
          rows="5"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="btn">Send</button>
      </form>
    </div>
  );
}
export default Contact;