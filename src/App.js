import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './assets/styles/reset.css';
import './assets/styles/main.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
