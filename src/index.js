import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'; // Import BrowserRouter
import HomePage from './component/homeComponent/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TurfList from './component/turfComponent/TurfList';
import AddTurf from './component/turfComponent/AddTurf'; 
// import 'bootstrap/dist/css/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserList from './component/users/UsersList';
import CreateUser from './component/users/CreateUser';
 import BookingList from './component/bookingComponent/BookingList'; 
import BookingForm from './component/bookingComponent/BookingForm';
import BookList from './component/bookingComponent/BookList';
import DeleteUser from './component/users/DeleteUser';
import DeleteTurf from './component/turfComponent/DeleteTurf';
import Register from './component/register/Register';
import Login from './component/register/Login';
import TurfUpdate from './component/turfComponent/TurfUpdate';



const Routes= createBrowserRouter([


  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/home",
    element: <HomePage />
  },
  // --------user----------------
  { 
    path:"/user-list",
    element:<UserList/>
  },
  { 
    path:"/create-user",
    element:<CreateUser/>
  },
   { 
    path:"/delete-user/:id",
    element:<DeleteUser/>
  },
  

  // --------turf---------
  {
    path:"/turfs",
    element:<TurfList/>
  },
  
  {
    path:"/add-turf",
    element:<AddTurf/>
  },

  {
    path: "/update-turf/:id",
    element:<TurfUpdate/>

  },
 

  {
    path:"/delete-turf/:id",
    element:<DeleteTurf/>
  },
 

//  ---------booking-----------------
{
  path:"/bookinglist",
  element:<BookingList/>
},

{
  path:"/bookingform",
  element:<BookingForm/> 
},
{
  path:"/booklist",
  element:<BookList/>

},
{
  path:"/register",
  element:<Register/>
},

{
  path:"/login",
  element:<Login/>
},

  
        

])



const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(


//   <BrowserRouter> {/* Wrap the entire app */}
//   <App />
// </BrowserRouter>

<RouterProvider router={Routes}>

</RouterProvider>

)