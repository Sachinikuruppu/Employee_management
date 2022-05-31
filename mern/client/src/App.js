import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import IncDecCounter from "./components/counter"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login";
import SignUp from "./components/signup";



const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
     
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/counter" element={<IncDecCounter />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </div>
    </div>
   
  );
};

export default App;


// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Login from "./components/login";
// import SignUp from "./components/signup";

// function App() {
//   return (
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={"/sign-in"}>Cdazzdev.com</Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/sign-up">Sign up</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Routes>
          
//             <Route exact path='/' component={<Login/>} />
//             <Route path="/sign-in" component={<Login/>} />
//             <Route path="/sign-up" component={<SignUp/>} />
            
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;