import React from "react";

import "../css/app.css"
import "../css/general.css"

const Footer = () => {
    return (
        <footer>
            <h1 className="center">Contact</h1>
            <p className="center"><a href="mailto:ezudea2@gmail.com">ezudea2@gmail.com</a></p>
            <p className="center"><a href="tel:+32 478 52 06 20">+32 478 52 06 20</a></p>
            <p className="center author">Made by Roberto Zunica <a href="https://robertozunica.net">robertozunica.net</a> - © 2022</p>
        </footer>
    );
};

export default Footer;