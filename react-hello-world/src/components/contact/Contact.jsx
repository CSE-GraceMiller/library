import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "948b6008-56d1-4db3-9cff-f6908255eff5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent");
      setTimeout(() => { setResult(""); }, 3000);

      event.target.reset();
    } 
    else {
      setResult("Error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-inner">
        <h2 className="section-title">Contact Us</h2>

        <form id="contact-form" onSubmit={onSubmit}>
          <p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </p>

          <p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </p>

          <p>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </p>

          <p>
            <button type="submit">Submit Form</button>
          </p>

          <p id="result">{result}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;