// import logo from './logo.svg';
// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Delete from "./delete";
// import Get from "./get";
// // import Register from "./Post";
// import Update from './update';
// function App() {
//   return (
//     <Router>
//            <div className="App">
//             <ul className="App-header">
//               <li>
//                 <Link to="/update">PUT</Link>
//               </li>
//               <li>
//                 <Link to="/get">GET</Link>
//               </li>
//               <li>
//                 <Link to="/delete">DELETE</Link>
//               </li>
//             </ul>
//            <Routes>
//                  <Route exact path='/update' element={< Update />}></Route>
//                  <Route exact path='/get' element={< Get />}></Route>
//                  <Route exact path='/delete' element={< Delete/>}></Route>
//           </Routes>
//           </div>
//       </Router>
//   );
// }
// export default App;

// import "../ticket/intro.css"
import Delete from "./delete";
import {StrictMode} from 'react';
import Update from "./update";
import Get from "./get";
import Register from "./post";
import Register1 from "./post1";
import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';


function Intro() {
    return (  
        <Router>
      <ul class="nav">
  <li class="nav-item">
    <Link to="/Register1" class="nav-link active">POST</Link>
  </li>
  <li class="nav-item">
    <Link to="/Get" class="nav-link">GET</Link>
  </li>
   <li class="nav-item">
  <Link to="/Delete" class="nav-link" >DELETE</Link>
  </li> 
   <li class="nav-item">
  <Link to="/Update" class="nav-link" >UPDATE</Link>
  </li> 
</ul>
<Routes>
  <Route path="/Register1" element={<Register1/>}/>
  <Route path="/Get" element={<Get/>}/>
  <Route path="/Delete" element={<Delete/>}/>
  <Route path="/Update" element={<Update/>}/>
  
</Routes>
    </Router>
    );
}

export default Intro;