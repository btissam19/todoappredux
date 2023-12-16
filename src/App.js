import React from "react";
import SignupPage from "./components/Register";
import LoginPage from "./components/Login";
import Home from "./components/Home";
import { Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
     <Route path='/' element={<LoginPage />}/>
     <Route path='/register' element={<SignupPage/>} />
     <Route path='/todo' element={<Home />} />
      
 </Routes>
</div>
  );
}

export default App;
