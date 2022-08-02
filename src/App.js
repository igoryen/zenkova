import './App.css';
import "./styles/mainStyle.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
