
import './App.css';
import { Route, Routes } from 'react-router-dom';
import GetStudents from './Components/Pages/GetStudents';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddInformation from './Components/Pages/AddInformation';
import SingleStudent from './Components/Pages/SingleStudent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GetStudents></GetStudents>}></Route>
        <Route path='/add' element={<AddInformation></AddInformation>}></Route>
        <Route path="/student/:id" element={<SingleStudent></SingleStudent>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
