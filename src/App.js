
import './App.css';
import { Route, Routes } from 'react-router-dom';
import GetStudents from './Components/Pages/GetStudents';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddInformation from './Components/Pages/AddInformation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GetStudents></GetStudents>}></Route>
        <Route path='/add' element={<AddInformation></AddInformation>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
