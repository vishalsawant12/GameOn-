
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import HomePage from './component/homeComponent/HomePage'; 



function App() {

  

  return (

    <div className="background-container">
     
     <Navbar /> 
    
     <main>
        <Outlet />   
        <HomePage /> 
    </main>

      <Footer/>   
     

    </div>
       
  );
}




export default App