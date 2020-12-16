import React from 'react';
import { Home, About, Electric, Medicine, Contacts, Footer, ElectricSlider, MedicalSlider } from './Screens'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Medicine />
      <MedicalSlider />
      <Electric />
      <ElectricSlider />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
