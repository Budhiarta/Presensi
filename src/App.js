import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './component/login';
import DashboardA from './pages/dashboard1';
import P_attandance from './pages/p_attandance';
import P_permission from './pages/p_permission';
import A_employee from './pages/a_employee';
import DashboardU from './pages/dashboard2';
import Todolist from './component/todo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/dashboard" element={<DashboardA/>}></Route>
        <Route path="/at" element={<P_attandance/>}></Route>
        <Route path="/per" element={<P_permission/>}></Route>
        <Route path="/em" element={<A_employee/>}></Route>
        <Route path="/dashboardu" element={<DashboardU/>}></Route>
        <Route path="/todo" element={<Todolist/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
