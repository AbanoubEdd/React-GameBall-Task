// import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import GamePlane from './pages/gameplan/Gameplan';
import Dashboard from './pages/dashboard/Dashboard';
import Levels from './pages/levels/Levels';
import NotFound from './pages/notFound/NotFound';


function App() {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GamePlane />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="levels" element={<Levels />} />
            <Route path="gameplane" element={<GamePlane />} />
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>  


    </>
  );
}

export default App;

