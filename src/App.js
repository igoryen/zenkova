import './App.css';
import "./styles/mainStyle.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import NoPage from './pages/NoPage';
import { Contacts } from './pages/Contacts';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Гид | Людмила Зенкова</title>
        <meta name="description" content="Ваш русский гид на Кубе" />
        <meta name="keywords" content='Куба, экскурсии, экскурсия, экскурсовод, гид, Гавана, Варадеро, Тринидад, русский, туризм, путешествие, отдых, отпуск' />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
