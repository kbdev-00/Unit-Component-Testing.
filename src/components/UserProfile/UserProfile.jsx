import { useState, useEffect } from 'react';
import './UserProfile.css';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();

        if (!cancelled) {
          setUser(data);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (loading) {
    return (
      <div className="user-profile loading" data-testid="loading-spinner">
        <div className="spinner"></div>
        <p>Loading user profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-profile error" data-testid="error-message">
        <p className="error-text">⚠️ {error}</p>
      </div>
    );
  }

  return (
    <div className="user-profile" data-testid="user-profile">
      <div className="user-avatar" data-testid="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <h2 className="user-name" data-testid="user-name">{user.name}</h2>
      <p className="user-email" data-testid="user-email">{user.email}</p>
      <p className="user-phone" data-testid="user-phone">{user.phone}</p>
      <div className="user-company" data-testid="user-company">
        <span className="company-label">Company:</span> {user.company?.name}
      </div>
    </div>
  );
}

export default UserProfile;
