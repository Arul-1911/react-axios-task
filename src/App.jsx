import './App.css'
import React  from 'react';
// import axios from 'axios';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
   <div className='main'>
   <h2>CRUD OPERATION</h2>
    <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Create/>}/>
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path='/update' element={<Update/>}/>
     </Routes>
    
    </BrowserRouter>
   </div>
  )
}

export default App;