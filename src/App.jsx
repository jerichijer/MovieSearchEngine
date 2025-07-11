import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import {Route, Routes, Router} from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContexts';

function App() {

  return (
      <MovieProvider>
        <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
  );
}

export default App;
