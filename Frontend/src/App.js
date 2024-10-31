
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Toaster} from 'react-hot-toast'
import Loginpage from './pages/Loginpage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/home/HomePage';
import Broswerpage from './pages/home/Broswerpage';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <div>
    {/* <Body/> */}
    <Routes>
      <Route path='/signin' element={<Loginpage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/browse' element={<Broswerpage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
    </Routes>
    <Toaster/>
    </div>
  );
}

export default App;
