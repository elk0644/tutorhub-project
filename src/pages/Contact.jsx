import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !/\S+@\S+\.\S+/.test(form.email) || form.message.length < 10)
      return setError("Please enter a name, a valid email and a message (10+ chars).");
    setError(""); setSent(true);
  };

  if (sent) return <h2>✅ Thanks {form.name}, we will contact you soon!</h2>;
  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={submit} className="form">
        <input className="field" name="name" placeholder="Name" value={form.name} onChange={change} />
        <input className="field" name="email" placeholder="Email" value={form.email} onChange={change} />
        <textarea className="field" name="message" rows="5" placeholder="Message" value={form.message} onChange={change} />
        {error && <p className="error">{error}</p>}
        <button className="btn">Send</button>
      </form>
    </>
  );
}
