import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Dashboard.css'
import { courses } from '../data/courses'

function Dashboard() {
  return (
    <div className="dashboard-root">
      <aside className="dash-sidebar">
        <div className="dash-brand">
          <img src="/Logo.svg" alt="Logo" />
          <h3>EduSmart</h3>
        </div>

        <nav className="dash-nav">
          <ul>
            <li><Link to="/dashboard">Tableau de bord</Link></li>
            <li><Link to="/dashboard/courses">Mes cours</Link></li>
            <li><Link to="/dashboard/pathways">Parcours</Link></li>
            <li><Link to="/dashboard/certificates">Certificats</Link></li>
            <li><Link to="/dashboard/settings">Paramètres</Link></li>
          </ul>
        </nav>

        <div className="dash-cta">
          <Link to="/courses/new" className="btn btn-primary">Nouveau cours</Link>
        </div>
      </aside>

      <div className="dash-main">
        <header className="dash-topbar">
          <div className="search-wrap">
            <input placeholder="Rechercher un cours, un parcours..." />
          </div>
          <div className="top-actions">
            <Link to="/profile" className="avatar">A</Link>
          </div>
        </header>

        <main className="dash-content">
          <section className="overview">
            <div className="overview-left">
              <h2>Bonjour, Étudiant</h2>
              <p>Continuez votre apprentissage là où vous l'avez laissé.</p>

              <div className="progress-cards">
                <div className="card progress">
                  <h4>Progression globale</h4>
                  <div className="meter"><div style={{width: '48%'}}></div></div>
                  <small>48% complété</small>
                </div>

                <div className="card stats">
                  <h4>Cours en cours</h4>
                  <p>3</p>
                </div>

                <div className="card stats">
                  <h4>Heures d'apprentissage</h4>
                  <p>12h</p>
                </div>
              </div>
            </div>

            <aside className="overview-right">
              <div className="up-next card">
                <h4>Prochain chapitre</h4>
                <p>Module: Grammaire — Leçon 4</p>
                <Link to="/courses/1" className="btn btn-secondary">Reprendre</Link>
              </div>

              <div className="recommendations card">
                <h4>Recommandations</h4>
                <ul>
                  <li>Apprendre JavaScript — Débutant</li>
                  <li>UI/UX Design — Intermédiaire</li>
                </ul>
              </div>
            </aside>
          </section>

          <section className="courses-list">
            <h3>Cours récents</h3>
            <div className="cards-grid">
              {courses.map((c) => (
                <article key={c.id} className="course-card">
                  <h4>{c.lang} {c.title}</h4>
                  <p>Progrès: {c.progress}%</p>
                  <Link to={`/courses/${c.id}`} className="btn btn-primary">Continuer</Link>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="dash-footer">
          © 2025 EduSmart — Bon apprentissage
        </footer>
      </div>
    </div>
  )
}

export default Dashboard
