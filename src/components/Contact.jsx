import "../styles/_contact.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-text">
        I'm currently open for freelance or full-time opportunities. Let’s
        connect!
      </p>
      <div className="contact-links">
        <a href="mailto:birrulwldain@gmail.com">birrulwldain@gmail.com</a>
        <a
          href="https://github.com/birrulwldain"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/birrulwldain"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
