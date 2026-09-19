import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          <h2>Zainab.</h2>

          <p>
            AI Developer & Front-End Developer
          </p>
        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

  <a href="#">
    <FaGithub />
  </a>

  <a href="#">
    <FaLinkedin />
  </a>

</div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Zainab Elsayed. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;