
import './App.css';
import Login from './component/login';
import Signup from './component/signup';
import Note from './component/note';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/note' element={<Note/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
