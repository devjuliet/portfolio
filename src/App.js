import "./App.css";

import Particles from 'react-particles-js';
import particlesConfig from './config/configParticles';

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <header className="App-header">
        <p>
          soon
        </p>
      </header>
    </div>
  );
}

export default App;
