import { memo, useState, useCallback, useEffect } from 'react';
import './App.css';

const GREETINGS = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'こんにちは'];

function App() {
  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex(prev => (prev + 1) % GREETINGS.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);  // No need for dependencies as GREETINGS is constant

  return (
    <div className={`App ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      
      <div className="container">
        <h1 className="title">
          {GREETINGS[greetingIndex]}{' '}
          <span className="highlight">
            {name || 'World'}
          </span>
        </h1>
        <p className="subtitle">WebApp SDK - Modern React Boilerplate</p>
        
        <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="name-input"
            maxLength={20}
            aria-label="Your name"
          />
        </div>

        <div className="counter-section">
          <button 
            className="counter-button" 
            onClick={incrementCount}
            aria-label="Increment counter"
          >
            Count: {count}
          </button>
          <div className="counter-circle" style={{ '--count': count }}>
            {count}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(App);