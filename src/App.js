import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
     <Routes>
       <Route path='/' element={<WelcomePage/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
