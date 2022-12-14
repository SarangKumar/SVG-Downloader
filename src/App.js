
import { Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Navigation from './components/Navigation';

//pages
import About from './pages/About';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

