import {Routes, Route} from 'react-router-dom'
import './App.css';
import AddMovie from './components/AddMovie';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import NavbarComponent from './components/NavbarComponent';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add-movie' element={<AddMovie/>} />
            <Route path='/movies-list' element={<MovieList/>} />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/contact-us' element={<ContactUs/>} />

        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
