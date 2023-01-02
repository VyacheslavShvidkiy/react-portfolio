import React from "react";
import './About.css';
import './Media.css';

const About = () => {
    return ( 
        <div className="about">
            <div className="about_info">
                <p className="about_title decoration_h"><span>M</span><span>y</span><span>,</span>&nbsp;<span>M</span><span>y</span><span>s</span><span>e</span><span>l</span><span>f</span>&nbsp;<span>&</span>&nbsp;<span>I</span></p>
                <p className="about_info decoration_p_t">I’m a Front-End Developer located in Ukraine. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p><br />
                <p className="about_info">Well-organised person, problem solver, independent employee with high attention to detail. Fan ofoutdoor activities, TV series and Website development. A family person and father of two fractious girls.</p><br />
                <p className="about_info decoration_p_b">Interested in the entire frontend spectrum and working hard to learn new web development technologies.</p>
            </div>
        </div>
     );
}
 
export default About;