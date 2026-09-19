function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-small-text">
          Hello, I'm
        </p>

        <h1>
          Zainab Elsayed
        </h1>

        <h2>
          AI Developer & Front-End Developer
        </h2>

        <p className="hero-description">
          I build intelligent, modern and user-friendly
          digital experiences using AI and web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View My Projects</a>

          <a href="#contact">Get In Touch</a>
        </div>

      </div>

      <div className="code-card">

        <div className="code-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <pre>
{`const developer = {
  name: "Zainab Elsayed",
  role: "AI Developer",
  skills: [
    "Python",
    "React",
    "JavaScript",
    "UI/UX"
  ]
};`}
        </pre>

      </div>

    </section>
  );
}

export default Hero;