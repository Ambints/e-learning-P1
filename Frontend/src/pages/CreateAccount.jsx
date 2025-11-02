import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/CreateAccount.css';

function CreateAccount() {
  return (
    <div className="create-container">
      <header className="create-header">
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
        <section className="create-section">
          <div className="create-card">
            <h2>Créer un compte</h2>
            <p className="create-sub">Rejoignez-nous — créez votre compte gratuit en quelques secondes.</p>

            <form className="create-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="firstname">Prénom</label>
              <input id="firstname" name="firstname" type="text" className="input" placeholder="Votre prénom" required />

              <label htmlFor="lastname">Nom</label>
              <input id="lastname" name="lastname" type="text" className="input" placeholder="Votre nom" required />

              <label htmlFor="email">Adresse e-mail</label>
              <input id="email" name="email" type="email" className="input" placeholder="votre@exemple.com" required />

              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type="password" className="input" placeholder="Minimum 8 caractères" required />

              <label htmlFor="confirm">Confirmer le mot de passe</label>
              <input id="confirm" name="confirm" type="password" className="input" placeholder="Retapez le mot de passe" required />

              <div className="create-row">
                <label className="terms"><input type="checkbox" required /> J'accepte les <Link to="/terms">conditions</Link> et la <Link to="/privacy">confidentialité</Link></label>
              </div>

              <button className="btn btn-primary btn-block" type="submit">Créer un compte</button>
            </form>

            <p className="signin-link">Déjà un compte ? <Link to="/login">Se connecter</Link></p>
          </div>
        </section>
      </main>

      <footer className="create-footer">
        <div className="footer-content">
          <p>© 2025 EduSmart. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default CreateAccount;
