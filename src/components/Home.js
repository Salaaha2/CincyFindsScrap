// Home.js

import React from 'react';
import Footer from './Footer';
import '../style/Home.css'; // Import the CSS file

function Home() {
  return (
    <div>
      <div className="title-container">
        <div className="title">Cincy Finds</div>
        <div className="subtitle">Cincinnati's treasure unveiled</div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;