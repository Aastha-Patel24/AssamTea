import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroAbout from '../components/HeroAbout';
import HistorySection from '../components/HistorySection';
import MissionSection from '../components/MissionSection';
import VisionSection from '../components/VisionSection';
import ProcessSection from '../components/ProcessSection';


function App() {
  return (
    <div>
      <HeroAbout/>
      <HistorySection />
      <MissionSection/>
      <VisionSection/>
      <ProcessSection/>
    </div>
  );
}

export default App;
