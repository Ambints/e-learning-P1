import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Login.css';

function Login() {
  return (
    <div className="login-container">
      <header className="login-header">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <img src="Logo.svg" alt="Logo" className="logo-img" />
            </Link>
          </div>
          <div className="nav-auth">
            <button className="btn btn-secondary">Se connecter</button>
            <button className="btn btn-primary">S'inscrire</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="login-section">
          <div className="login-card">
            <h2>Se connecter</h2>
            <p className="login-sub">Bienvenue ! Connectez-vous pour accéder à votre compte.</p>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email">Adresse e-mail</label>
              <input id="email" name="email" type="email" className="input" placeholder="votre@exemple.com" required />

              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type="password" className="input" placeholder="••••••••" required />

              <div className="login-row">
                <label className="remember"><input type="checkbox" /> Se souvenir de moi</label>
                <Link className="forgot-link" to="/forgot">Mot de passe oublié ?</Link>
              </div>

              <button className="btn btn-primary btn-block" type="submit">Se connecter</button>
            </form>

            <p className="signup-link">Pas de compte ? <Link to="/signup">S'inscrire</Link></p>
          </div>
        </section>
      </main>

      <footer className="login-footer">
        <div className="footer-content">
          <p>© 2025 EduSmart. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
