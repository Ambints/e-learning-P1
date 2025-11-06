import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { login } from '../services/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
            <Link to="/login" className="btn btn-secondary">Se connecter</Link>
            <Link to="/signup" className="btn btn-primary">S'inscrire</Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="login-section">
          <div className="login-card">
            <h2>Se connecter</h2>
            <p className="login-sub">Bienvenue ! Connectez-vous pour accéder à votre compte.</p>

            {/* Controlled form that calls the backend */}
            <form className="login-form" onSubmit={async (e) => {
              e.preventDefault();
              setError('');
              setLoading(true);
              try {
                const data = await login(email, password);
                // if backend returns a token, store it
                if (data && data.token) {
                  localStorage.setItem('token', data.token);
                }
                navigate('/dashboard');
              } catch (err) {
                setError(err.message || 'Erreur de connexion');
              } finally {
                setLoading(false);
              }
            }}>
              <label htmlFor="email">Adresse e-mail</label>
              <input id="email" name="email" type="email" className="input" placeholder="votre@exemple.com" required value={email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type="password" className="input" placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)} />

              <div className="login-row">
                <label className="remember"><input type="checkbox" /> Se souvenir de moi</label>
                <Link className="forgot-link" to="/forgot">Mot de passe oublié ?</Link>
              </div>

              <button className="btn btn-primary btn-block" type="submit" disabled={loading}>{loading ? 'Connexion...' : 'Se connecter'}</button>
              {error && <p className="form-error" style={{ color: 'red' }}>{error}</p>}
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
