import React from "react";
import './Home.css';
import './Media.css';
import Contacts from "../Contacts/Contacts";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="home">
            <h1 className="hi decoration_H-t">Hi!</h1>
            <h2 className="name">I am <span>V</span><span>y</span><span>a</span><span>c</span><span>h</span><span>e</span><span>s</span><span>l</span><span>a</span><span>v</span>, <br /></h2>
            <h2 className="profession decoration_H_b">web developer</h2>
            <Link to="/contacts" className="contact decoration_a">Contact me!
                <div className="contact_block"></div>
            </Link>
        </div>
        <Routes>
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
        </> 
     );
}
 
export default Home;