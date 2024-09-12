import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Search = lazy(() => import('./pages/Search/Search'));

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';
import { lazy, Suspense } from 'react';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Suspense
        fallback={<div style={{ width: '100vw', height: '100vh' }}>loading...please wait...</div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};
export default App;
