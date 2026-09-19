import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-title">
        <p>Contact Me</p>

        <h2>Let's Work Together</h2>

        <span>
          Have a project in mind? I'd love to hear from you.
        </span>
      </div>


      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Talk</h3>

          <p>
            I'm always open to discussing new projects,
            creative ideas and opportunities.
          </p>

          <div className="contact-item">
            <span>
              <FaEnvelope />
            </span>
            <div>
              <h4>Email</h4>
              <p>zainabelsayed@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Egypt</p>
            </div>
          </div>

          <div className="contact-item">
            <span>
              <FaLinkedin />
            </span>
            <div>
              <h4>LinkedIn</h4>
              <p>Let's connect professionally</p>
            </div>
          </div>

        </div>

        <div className="contact-item">

  <span>
    <FaGithub />
  </span>

  <div>
    <h4>GitHub</h4>
    <p>Check out my projects</p>
  </div>

</div>


        <form className="contact-form">

          <div className="form-row">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;