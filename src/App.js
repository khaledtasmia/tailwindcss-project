import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Router, Switch } from 'react-router';
import Home from './pages';
import Foods from './components/Foods/Foods';
import Dropdown from './components/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import About from './components/About/About';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideNav = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", hideNav)
    return () => {
      window.removeEventListener('resize', hideNav);
    }
  })

  return (
    <div>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Foods} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
