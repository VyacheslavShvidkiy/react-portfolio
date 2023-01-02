import React from "react";
import './Contacts.css';

const Contacts = () => {
    return ( 
        <div className="contacts">
            <div className="contacts_form">
                <p className="contacts_title decoration_h"><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> &nbsp; <span>M</span><span>e</span></p>
                <p className="contacts_form_title decoration_p_t">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have another request or question, don't hesitate to use the form.</p><br />
                <p className="contacts_form_title decoration_p_b">Have an exciting project you need help with? Send me an email or contact me via instant message!</p>
                <a href="mailto:slashdev1983@gmail.com" className="mail decoration_a">slashdev1983@gmail.com
                    <div className="mail_bg"></div>
                </a>
            </div>
        </div>
     );
}
 
export default Contacts;