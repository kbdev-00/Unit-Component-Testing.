import { useState } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import InputField from './components/InputField/InputField';
import Counter from './components/Counter/Counter';
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [userId, setUserId] = useState(1);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🧪 The Testing Suite</h1>
        <p className="app-subtitle">
          Week 11 — Unit & Component Testing with Jest + React Testing Library
        </p>
      </header>

      <main className="app-main">
        {/* Section 1: Buttons */}
        <section className="section">
          <h2 className="section-title">Button Component</h2>
          <p className="section-desc">Level 1 — Basic rendering tests</p>
          <div className="section-content buttons-grid">
            <Button label="Primary" variant="primary" onClick={() => alert('Primary clicked!')} />
            <Button label="Secondary" variant="secondary" onClick={() => alert('Secondary clicked!')} />
            <Button label="Danger" variant="danger" onClick={() => alert('Danger clicked!')} />
            <Button label="Disabled" variant="primary" disabled={true} />
          </div>
        </section>

        {/* Section 2: Cards */}
        <section className="section">
          <h2 className="section-title">Card Component</h2>
          <p className="section-desc">Level 1 — Conditional rendering tests</p>
          <div className="section-content cards-grid">
            <Card
              title="React Testing"
              description="Learn to write automated tests for your React components using Jest and RTL."
              footer="📅 Week 11"
            />
            <Card
              title="Component Isolation"
              description="Test each component independently to ensure reliability."
            />
            <Card
              title="Test Coverage"
              description="Achieve 70%+ coverage on all tested components."
              footer="🎯 Target: 70%"
            />
          </div>
        </section>

        {/* Section 3: Input Field */}
        <section className="section">
          <h2 className="section-title">InputField Component</h2>
          <p className="section-desc">Level 2 — User interaction tests</p>
          <div className="section-content">
            <InputField
              label="Your Name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something to test..."
            />
            {inputValue && (
              <p style={{ color: '#6366f1', marginTop: '12px' }}>
                You typed: <strong>{inputValue}</strong>
              </p>
            )}
          </div>
        </section>

        {/* Section 4: Counter */}
        <section className="section">
          <h2 className="section-title">Counter Component</h2>
          <p className="section-desc">Level 2 — Click event & state change tests</p>
          <div className="section-content">
            <Counter initialCount={0} step={1} />
          </div>
        </section>

        {/* Section 5: User Profile (API Fetch) */}
        <section className="section">
          <h2 className="section-title">UserProfile Component</h2>
          <p className="section-desc">Level 3 — API mocking tests</p>
          <div className="section-content">
            <div className="user-selector">
              <label style={{ color: '#cbd5e1', fontWeight: 600 }}>Select User ID: </label>
              <select
                value={userId}
                onChange={(e) => setUserId(Number(e.target.value))}
                style={{
                  background: '#1e1e2e',
                  color: '#e2e8f0',
                  border: '2px solid #334155',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '1rem',
                  marginLeft: '8px',
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                  <option key={id} value={id}>
                    User {id}
                  </option>
                ))}
              </select>
            </div>
            <UserProfile userId={userId} />
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Run <code>npm test</code> to execute all tests • Run{' '}
          <code>npm run test:coverage</code> for coverage report
        </p>
      </footer>
    </div>
  );
}

export default App;
