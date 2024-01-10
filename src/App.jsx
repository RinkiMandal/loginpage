import { Route, Routes } from 'react-router-dom';

import { createContext, useState } from 'react';
import Header from './componants/Header.jsx'
import Footer from './componants/Footer.jsx'
import SignUp from './componants/SignUp.jsx'
// import Login from './componants/Login.jsx'
// import Login from './componants/Log.jsx';
import Log from './componants/Log.jsx';
import Home from './componants/Home.jsx'
import Cart from './componants/Cart.jsx';
import LabTests from './componants/LabTests.jsx'
import Offier from './componants/Offier.jsx';
import DoctorAp from './componants/DoctorAp.jsx';
import { inMemoryPersistence } from 'firebase/auth';


const Appstate = createContext();


function App() {
  const [login, setLogin] = useState(false);
  const [ userName, setUserName] = useState('');

  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}}> 
      <div className="App relative">
          <Header />
          <Routes>
    <Route path='/' element={<Home />}/>
   <Route path='signup' element={<SignUp />} />
   <Route path='log' element={<Log />} />
   <Route path='cart' element={<Cart />} />
   <Route path='labtests' element={<LabTests />} />
   <Route path='offier' element={<Offier />} />
   <Route path='doctorap' element={<DoctorAp />} />
   
          </Routes>      
          <Footer />
      </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}