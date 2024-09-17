import React from 'react';
import { useAuth } from '../Context/UserAuthContext';
import { useNavigate, Outlet } from 'react-router-dom';
import LoaderSc from '../Components/LoaderSc';
import { Navbar } from '../Navbar/Navbar';
import Register from './Register';
import SignUp from './Register';
import "./Register.css";

const Account = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user === null && !loading) {
      navigate('/account/register');
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate('/account/signin');
  };

  return (
    <>
      <Navbar />
      {loading && <LoaderSc />}
      <Outlet /> 
      <div className="account-page">
        {user ? (
          <div className="user-info">
            <h2>Welcome, {user.displayName || user.email}!</h2>
            <p>Email: {user.email}</p>
            <button className="btn btn-danger" onClick={handleLogout} disabled={loading}>
              {loading ? 'Logging Out...' : 'Logout'}
            </button>
          </div>
        ) : (
          <div className="auth-options">
            <h4>So glad you are here.</h4>
            <SignUp />
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
