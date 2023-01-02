import About from './About/About';
import './App.css';
import Home from './Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import './Navigation/Navigation.css';
import home from './Navigation/img/home.png';
import about from './Navigation/img/id-card.png';
import skills from './Navigation/img/skills.png';
import folder from './Navigation/img/folder.png';
import contacts from './Navigation/img/contacts.png';
import logo from './Navigation/img/logo.svg';
import foto from './Navigation/img/myfoto.jpg';
import Contacts from './Contacts/Contacts';



function App() {

  
  return (
      <div className="App">
        <>
        <div className="navigation">
            <div className="logo">
                <img src={foto} alt="" />
            </div>
            <ul className="nav_list">
                <li className="nav_item">
                    <Link to="*"> <img src={home} alt="" /></Link>
                </li>
                <li className="nav_item">
                    <Link to="/about"> <img src={about} alt="" /></Link>
                </li>
                <li className="nav_item">
                    <Link to="/skills"> <img src={skills} alt="" /></Link>
                </li>
                <li className="nav_item">
                    <Link to="/folder"> <img src={folder} alt="" /></Link>
                </li>
                <li className="nav_item">
                    <Link to="/contacts"> <img src={contacts} alt="" /></Link>
                </li>
            </ul>
        </div>
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/folder" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
        </>
      </div>
  );
}

export default App;
