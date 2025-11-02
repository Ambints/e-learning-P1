import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import { courses } from '../data/courses';

function Home() {
  return (
    <div className="home-container">
      {/* 1. Barre de Navigation */}
      <header className="home-header">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <img src="Logo.svg" alt="Logo" className="logo-img" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><a href="/cours">Cours</a></li>
            <li><a href="/parcours">Parcours</a></li>
            <li><a href="/a-propos">À Propos</a></li>
          </ul>
          <div className="nav-search">
            <input type="text" placeholder="Rechercher..." />
          </div>
          <div className="nav-auth">
            <Link to="/login" className="btn btn-secondary">Se connecter</Link>
            <Link to="/signup" className="btn btn-primary">S'inscrire</Link>
          </div>
        </nav>
      </header>

      {/* 2. Section "Héros" */}
      <main>
        <section className="hero-section">
          <h1>Apprenez. Pratiquez. Réussissez.</h1>
          <h3>
            Votre avenir commence ici. Accédez à des cours complets sur A, B, C, D et bien plus encore.
          </h3>
          <div className="hero-cta">
            <Link to="/signup" className="btn btn-primary btn-large">Commencer gratuitement</Link>
          </div>
        </section>

        {/* 3. Grille des Cours */}
        <section className="courses-section">
          <h2>Commencez votre parcours</h2>
          <p>Choisissez un sujet pour débuter.</p>

          <div className="course-grid">
            {courses.map((c) => (
              <div key={c.id} className="course-card">
                <h3>{c.lang} {c.title}</h3>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Section "Pourquoi nous choisir ?" */}
        <section className="value-prop-section">
          <h2>Une nouvelle façon d'apprendre</h2>

          <div className="value-prop-grid">
            <div className="value-prop-item">
              <span className="value-icon">📚</span>
              <h4>Apprentissage flexible</h4>
              <p>
                Apprenez à votre rythme, où vous voulez et quand vous voulez.
                Accès illimité à tous les cours.
              </p>
            </div>

            <div className="value-prop-item">
              <span className="value-icon">🎯</span>
              <h4>Par la pratique</h4>
              <p>
                Mettez vos connaissances en application avec des exercices et
                des projets concrets.
              </p>
            </div>

            <div className="value-prop-item">
              <span className="value-icon">💬</span>
              <h4>Soutien communautaire</h4>
              <p>
                Ne restez jamais bloqué. Rejoignez notre communauté d'apprenants
                et de mentors.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Appel à l'action final */}
        <section className="final-cta-section">
          <h2>Prêt à développer vos compétences ?</h2>
          <p>Créez un compte gratuit et commencez à apprendre dès aujourd'hui.</p>
          <Link to="/signup" className="btn btn-primary btn-large">S'inscrire gratuitement</Link>
        </section>
      </main>

      {/* 6. Pied de page */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-logo">
            [Votre Logo]
          </div>

          <div className="footer-links">
            <div>
              <h4>Cours</h4>
              <ul>
                <li><a href="/a">Apprendre A</a></li>
                <li><a href="/b">Apprendre B</a></li>
                <li><a href="/c">Apprendre C</a></li>
                <li><a href="/d">Apprendre D</a></li>
              </ul>
            </div>

            <div>
              <h4>Notre entreprise</h4>
              <ul>
                <li><a href="/about">À Propos</a></li>
                <li><a href="/careers">Carrières</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4>Support</h4>
              <ul>
                <li><a href="/help">Centre d'aide</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            {/* Remplacez par vos icônes (ex: FontAwesome, SVG) */}
            <a href="#">T</a>
            <a href="#">L</a>
            <a href="#">F</a>
          </div>

          <p>
            © 2025 EduSmart. Tous droits réservés. |
            <a href="/terms"> Conditions</a> |
            <a href="/privacy"> Confidentialité</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
