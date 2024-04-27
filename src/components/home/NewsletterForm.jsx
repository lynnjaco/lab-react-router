import React from "react";
import "./NewsletterForm.css";

export function NewsletterForm() {
  return (
    <section className="signup">
      <h2>Sign up for our newsletter!</h2>
      <form>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email..."
        />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default NewsletterForm;
