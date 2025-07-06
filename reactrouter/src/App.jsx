import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Github from './components/Github';
import Footer from './components/Footer';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common Layout Route */}
        <Route path="/" element={<Header />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="github" element={<Github />} />
          <Route path="user" element={<User />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
