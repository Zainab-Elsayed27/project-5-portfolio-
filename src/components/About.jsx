function About() {
  return (
    <section id="about" className="about-section">

      <div className="section-title">
        <p>About Me</p>

        <h2>Who I Am</h2>

        <span>
          A little bit about my background and what I do.
        </span>
      </div>


      <div className="about-container">

        <div className="about-text">

          <h3>
            I'm Zainab, an AI & Front-End Developer.
          </h3>

          <p>
            I have a background in Artificial Intelligence and
            a strong interest in building modern web applications.
          </p>

          <p>
            I enjoy combining technology, design and problem solving
            to create useful and user-friendly digital experiences.
          </p>

          <p>
            I'm continuously learning new technologies and improving
            my skills through practical projects.
          </p>

          <a href="#contact" className="about-button">
            Let's Work Together
          </a>

        </div>


        <div className="about-info">

          <div className="info-card">
            <h3>AI</h3>
            <p>Artificial Intelligence</p>
          </div>

          <div className="info-card">
            <h3>Web</h3>
            <p>Front-End Development</p>
          </div>

          <div className="info-card">
            <h3>UI/UX</h3>
            <p>Digital Product Design</p>
          </div>

          <div className="info-card">
            <h3>Learning</h3>
            <p>Always Improving</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;