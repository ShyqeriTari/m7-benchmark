import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import WeatherPage from './components/WeatherPage';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
    <MyNavbar/>
     <Routes>
       <Route path='/' element={<WelcomePage/>}/>
       <Route path="/:cityName" element={<WeatherPage/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
