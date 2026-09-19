function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="section-title">

        <p>My Projects</p>

        <h2>Things I've Built</h2>

        <span>
          A selection of projects I've worked on using AI, web development and UI/UX.
        </span>

      </div>


      <div className="projects-container">


        {/* Project 1 */}

        <div className="project-card">

          <div className="project-image">

            <img
              src="/projects/plantcare.png"
              alt="PlantCare AI"
            />

          </div>


          <div className="project-content">

            <span className="project-type">
              AI / UI/UX
            </span>

            <h3>PlantCare AI</h3>

            <p>
              An AI-powered plant care application that helps users
              identify plants and detect possible plant diseases.
            </p>

            <div className="project-tech">

              <span>AI</span>
              <span>React</span>
              <span>UI/UX</span>

            </div>

            <div className="project-links">

              <a href="#">
                Live Demo
              </a>

              <a href="#">
                GitHub
              </a>

            </div>

          </div>

        </div>


        {/* Project 2 */}

        <div className="project-card">

          <div className="project-image">

            <img
              src="/projects/sportia.png"
              alt="Sportia"
            />

          </div>


          <div className="project-content">

            <span className="project-type">
              Web / UI/UX
            </span>

            <h3>Sportia</h3>

            <p>
              A sports platform for booking venues, joining matches,
              finding training opportunities and exploring sports products.
            </p>

            <div className="project-tech">

              <span>React</span>
              <span>JavaScript</span>
              <span>UI/UX</span>

            </div>

            <div className="project-links">

              <a href="#">
                View Project
              </a>

              <a href="#">
                Case Study
              </a>

            </div>

          </div>

        </div>


        {/* Project 3 */}

        <div className="project-card">

          <div className="project-image">

            <img
              src="/projects/eclipse.png"
              alt="Eclipse Jewelry"
            />

          </div>


          <div className="project-content">

            <span className="project-type">
              Front-End
            </span>

            <h3>Eclipse Jewelry</h3>

            <p>
              A modern e-commerce website designed for browsing
              jewelry products and managing a shopping cart.
            </p>

            <div className="project-tech">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>

            </div>

            <div className="project-links">

              <a href="#">
                Live Demo
              </a>

              <a href="#">
                GitHub
              </a>

            </div>

          </div>

        </div>


      </div>

    </section>
  );
}

export default Projects;