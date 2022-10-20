import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import TopicHeroSection from './components/TopicHeroSection';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const topics = useSelector(state => state.topicsReducer.topics)
  return (
    <Router>
      <div className='appContainer'>
        <Header />
        <TopicHeroSection />
        <MainPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
