import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <header className="hero">
        <h1>Anikesh</h1>
        <p>Software developer. Here are some things I've built.</p>
      </header>

      <main>
        {loading && <p>Loading projects...</p>}
        {error && <p className="error">{error}</p>}

        <div className="projects">
          {projects.map((project) => (
            <div className="card" key={project._id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tags">
                {(project.tech || []).map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  View project →
                </a>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>Built with the MERN stack.</p>
      </footer>
    </div>
  );
}

export default App;
