import React, { useState } from 'react';
import { useAuth } from '../Context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { signIn, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signupcss">
      <main className="signin-css">
        <form onSubmit={handleSubmit}>
          <h1 className="h6 mb-3 fw-normal">Please Sign In</h1>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-floating">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              className="form-control" 
              id="emailInput"
              placeholder="name@example.com" 
              aria-describedby="emailHelp"
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
          <div className="form-floating">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              className="form-control"
              id="passwordInput"
              placeholder="Password" 
              aria-describedby="passwordHelp"
            />
            <label htmlFor="passwordInput">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value="remember-me" 
              id="flexCheckDefault" 
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <h6 style={{ marginTop: "20px" }}>
            Don't have an account? <Link to='/account/register'>Sign Up</Link>
          </h6>

          <p className="mt-5 mb-3 text-body-secondary">© 2024 Developed by Maria Yasmeen</p>
        </form>
      </main>
    </div>
  );
}

export default SignIn;
