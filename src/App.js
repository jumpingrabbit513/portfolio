import Main from './Main.js'
import Home from './pages/Home.js'
import Personas from './pages/Personas.js'
import Redesign from './pages/Redesign.js'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Iterative from './pages/Iterative';


// TODO:
// create page to display landdweller
// create back button for inner pages

function App() {
  return (
    <div className="JumpingRabbitPortfolio">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="personas" element={<Personas/>} />
          <Route path="redesign" element={<Redesign/>} />
          <Route path="iterative" element={<Iterative/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
