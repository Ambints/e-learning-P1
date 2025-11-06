import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/CreateAccount.css';
import { register } from '../services/auth';

function CreateAccount() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
            <Link to="/login" className="btn btn-secondary">Se connecter</Link>
            <Link to="/signup" className="btn btn-primary">S'inscrire</Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="create-section">
          <div className="create-card">
            <h2>Créer un compte</h2>
            <p className="create-sub">Rejoignez-nous — créez votre compte gratuit en quelques secondes.</p>

            <form className="create-form" onSubmit={async (e) => {
              e.preventDefault();
              setError('');
              if (password !== confirm) {
                setError('Les mots de passe ne correspondent pas.');
                return;
              }
              setLoading(true);
              try {
                const data = await register(firstName, lastName, email, password);
                if (data && data.token) {
                  localStorage.setItem('token', data.token);
                }
                navigate('/dashboard');
              } catch (err) {
                setError(err.message || 'Erreur lors de la création du compte');
              } finally {
                setLoading(false);
              }
            }}>
              <label htmlFor="firstname">Prénom</label>
              <input id="firstname" name="firstname" type="text" className="input" placeholder="Votre prénom" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

              <label htmlFor="lastname">Nom</label>
              <input id="lastname" name="lastname" type="text" className="input" placeholder="Votre nom" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

              <label htmlFor="email">Adresse e-mail</label>
              <input id="email" name="email" type="email" className="input" placeholder="votre@exemple.com" required value={email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type="password" className="input" placeholder="Minimum 8 caractères" required value={password} onChange={(e) => setPassword(e.target.value)} />

              <label htmlFor="confirm">Confirmer le mot de passe</label>
              <input id="confirm" name="confirm" type="password" className="input" placeholder="Retapez le mot de passe" required value={confirm} onChange={(e) => setConfirm(e.target.value)} />

              <div className="create-row">
                <label className="terms"><input type="checkbox" required /> J'accepte les <Link to="/terms">conditions</Link> et la <Link to="/privacy">confidentialité</Link></label>
              </div>

              <button className="btn btn-primary btn-block" type="submit" disabled={loading}>{loading ? 'Création...' : 'Créer un compte'}</button>
              {error && <p className="form-error" style={{ color: 'red' }}>{error}</p>}
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
