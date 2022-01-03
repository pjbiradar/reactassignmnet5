import './App.css';
import Home from './Components/Home';
import Students from './Components/Students'
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import AddandEdit from './Components/AddandEdit';
import {Studentprovide} from './Components/CreateContext'


function App() {
  return (
    <Studentprovide>

   
    <div className="App">
      <div className='main'>
        <Router>
        <Header/>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/addandedit' element={<AddandEdit/>}>
              <Route path=':id' element={<AddandEdit/>}></Route>
            </Route>


            
            



          </Routes>

        </Router>

       


      </div>
      
    </div>
    </Studentprovide>
  );
}

export default App;

