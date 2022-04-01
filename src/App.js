import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import ForgetPass from './Pages/Login/ForgetPass/ForgetPass';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp/SignUp';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
