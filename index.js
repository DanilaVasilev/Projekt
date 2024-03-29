import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './pages/profile';
import Entrance from './pages/entrance'
import Registration from './pages/registration'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
     <Route path='/profile' element={<Entrance/>}/>
     <Route path='/' element={<Profile/>}/>
     <Route path='/registration' element={<Registration/>}/>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);
export default App;

