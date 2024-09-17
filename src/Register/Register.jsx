import React, { useState } from 'react';
import { auth, db } from '../Utils/firebaseConfig'; // Assuming db is the Firestore instance for saving user data
import LoaderSc from '../Components/LoaderSc';
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Import for creating user
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';  // For saving user data to Firestore
import "./Register.css";

function SignUp() {
  // State variables
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");  // New state for user's name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Sign up function
  const signUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      // Create user using Firebase
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', result.user);

      // Save user info to Firestore
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name: name,  // Save the user's name
        email: email,
      });

      // Save user info to localStorage
      localStorage.setItem("user", JSON.stringify(result.user));

      // Navigate to home or another page on successful sign-up
      navigate("/");

    } catch (error) {
      console.log('Sign-up error:', error);
      setError("Error creating account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signupcss">
      {loading && <LoaderSc />}
      <main className="signin-css">
        <form onSubmit={signUp}>
          <h1 className="h6 mb-3 fw-normal">Please Sign Up</h1>

          {/* Show error message */}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-floating">
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
              className="form-control" 
              id="nameInput"
              placeholder="John Doe" 
              aria-describedby="nameHelp"
            />
            <label htmlFor="nameInput">Full Name</label>
          </div>
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
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <h6 style={{ marginTop: "20px" }}>
            Already have an account? <Link to='/signin'>Sign In</Link>
          </h6>

          <p className="mt-5 mb-3 text-body-secondary">© 2024 Developed by Maria Yasmeen</p>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
