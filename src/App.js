import React, { lazy, Suspense } from 'react';
import './App.css';

const Header = lazy(() => import("./components/Header"));
const TopicHeroSection = lazy(() => import("./components/TopicHeroSection"))
const ImageListing = lazy(() => import("./components/ImageListing"));
const Footer = lazy(() => import("./components/Footer"));


function App() {

  return (
    <div className='appContainer'>
      <Suspense fallback={<div>Loading</div>}>
        <Header />
        <TopicHeroSection />
        <ImageListing />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
