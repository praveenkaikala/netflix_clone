
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import {Toaster} from 'react-hot-toast'
import Loginpage from './pages/Loginpage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div>
    {/* <Body/> */}
    <Routes>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    <Toaster/>
    </div>
  );
}

export default App;
