import { useState } from "react";
import "../CSS/form.css";

export default function Form() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    // e.preventDefault();
    if (subject === "") {
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      <label htmlFor="Subject">Subject</label>

      <input
        type="text"
        placeholder="Your Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <label htmlFor="Message">Message</label>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder=" your message"
      ></textarea>

      <button>Submit</button>
    </form>
  );
}
