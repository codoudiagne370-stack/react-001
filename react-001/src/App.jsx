import './App.css'

function App() {
  return (
    <div className="cv">
      <header className="cv-header">
        <div className="avatar">CV</div>
        <h1>Codou Diagne</h1>
        <p>Étudiante en informatique</p>
        <p>Developeur Full-Stack junior</p>
      </header>

      <main className="cv-content">
        <section>
          <h2>Informations personnelles</h2>
          <p><strong>Email :</strong> codoudiagne370@gmail.com</p>
          <p><strong>Téléphone :</strong> 774581699</p>
          <p><strong>Ville :</strong> Dakar, Senegal</p>
        </section>

        <section>
          <h2>Profil</h2>
          <p>
            Étudiante motivée et curieuse, je m'intéresse
            à l'informatique et au développement web.
            Je souhaite développer mes compétences et
            acquérir de nouvelles expériences.
          </p>
        </section>

        <section>
          <h2>Compétences</h2>
          <ul>
            <li>HTML : bases de la structure web</li>
            <li>CSS : bases de la mise en forme</li>
            <li>JavaScript : notions fondamentales</li>
            <li>React et Vite : initiation</li>
            <li>VS Code : utilisation de l'éditeur</li>
          </ul>
        </section>

        <section>
          <h2>Formation</h2>
          <div className="item">
            <h3>Formation en informatique</h3>
            <p>Institut Superieur d'Informatique</p>
            <p>Année : 2026/2027</p>
          </div>
        </section>

        <section>
          <h2>Expériences et projets</h2>
          <div className="item">
            <h3>Création d'un projet React avec Vite</h3>
            <p>
              Création d'un projet, installation des
              dépendances et lancement du serveur local.
            </p>
          </div>
        </section>

        <section>
          <h2>Langues</h2>
          <p>Français</p>
          <p>Anglais</p>
        </section>
      </main>

      <footer>
        <p>CV réalisé avec React et Vite</p>
      </footer>
    </div>
  )
}

export default App