import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Headline } from './components/Headline/Headline';
import { InfoBoxes } from './components/InfoBoxes/InfoBoxes';
import { LearnMore } from './components/LearnMore/LearnMore';
import { PageBreak } from './components/PageBreak/PageBreak';
import { Footer } from './components/Footer/Footer';
import { Grid, useMediaQuery } from '@material-ui/core';
import { Routes, Route } from "react-router-dom";
import { BorrowerForm } from './components/BorrowerForm/BorrowerForm';

function App() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const mobileApp = () => {
    return (
      <Grid container direction="column" alignItems="center">
        <div className="mobile-gradient-bg">
          <Navbar />
          <Headline />
        </div>
        <div className="mobile-whiteish-bg">
          <InfoBoxes />
          <LearnMore />
          <PageBreak />
        </div>
        <div className="mobile-footer-bg">
          <Footer />
        </div>
      </Grid>
    );
  }

  const desktopApp = () => {
    return (
      <Grid container direction="column" alignItems="center">
        <Navbar />
        <Headline />
        <InfoBoxes />
        <LearnMore />
        <PageBreak />
        <Footer />
      </Grid>
    );
  }

  return (
    <div className="App">
      <body>
        <Grid container direction="column" alignItems="center" xs={12}>
            <Routes>
              <Route path="/" element={ isSmallScreen ? mobileApp() : desktopApp() } />
              <Route path="/borrow" element={<BorrowerForm />} />
            </Routes>
        </Grid>
      </body>
    </div>
  );
}

export default App;
