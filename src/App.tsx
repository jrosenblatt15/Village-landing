import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Headline } from './components/Headline/Headline';
import { InfoBoxes } from './components/InfoBoxes/InfoBoxes';
import { LearnMore } from './components/LearnMore/LearnMore';
import { PageBreak } from './components/PageBreak/PageBreak';
import { Footer } from './components/Footer/Footer';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <body>
        <Grid container direction="column" alignItems="center">
          <Navbar />
          <Headline />
          <InfoBoxes />
          <LearnMore />
          <PageBreak />
          <Footer />
        </Grid>
      </body>
    </div>
  );
}

export default App;
