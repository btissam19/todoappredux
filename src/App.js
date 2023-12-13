import React from "react";
import SignupPage from "./components/Register";
import LoginPage from "./components/Login";
import ListPage from "./components/ListPage";
import { Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
     <Route path='/' element={<LoginPage />}/>
     <Route path='/register' element={<SignupPage/>} />
     <Route path='/todo' element={<ListPage />} />
      
 </Routes>
</div>
  );
}

export default App;
