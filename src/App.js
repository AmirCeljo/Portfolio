import {HashRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Portfolio from './portfolio/Portfolio';
import Work from './work/Work';
function App() {
  return (
    <>
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='Portfolio/' element={<Portfolio/>}/>
        <Route path='Portfolio/Portfolio/work' element={<Work/>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
