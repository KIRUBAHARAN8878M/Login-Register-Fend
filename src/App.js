import './css/sb-admin-2.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/loginfolder/Login';
import Portal from './components/Portal';
import Dashboard from './components/Dashboard';
import Register from './components/loginfolder/Register';
import Users from './components/Users';
import Passwordreset from './components/loginfolder/Passwordreset';
import ResetPasswordPage from './components/loginfolder/ResetPasswordPage';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/resetpassword' element={<Passwordreset/>}/>
          <Route path='/reset-password-page' element={< ResetPasswordPage/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/portal" element={<Portal />} >

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;