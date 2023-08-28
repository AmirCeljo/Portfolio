import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Portfolio from './portfolio/Portfolio';
import Work from './work/Work';
import Blog from './blog/Blog';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='Portfolio/' element={<Portfolio/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
