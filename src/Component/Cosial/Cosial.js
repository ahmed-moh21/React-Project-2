import React from "react";
import "./Cosial.css"/* FaFacebookF */
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Cosial = () => {
    return (
        <div className="Cos-ial">
            <div className="wrappe-ab ">
                <div className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <span className="span-about"><FaFacebookF className="fab fa-twitter" /></span>
                </div>
                <div className="icon twitter">
                    <div className="tooltip">Twitter</div>
                    <span className="span-about"><FaTwitter className="fab fa-twitter" /></span>
                </div>
                <div className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span className="span-about"><FiInstagram className="fab fa-twitter" /></span>
                </div>
                <div className="icon github">
                    <div className="tooltip">Github</div>
                    <span className="span-about"><BsGithub className="fab fa-twitter" /></span>
                </div>
                <div className="icon youtube">
                    <div className="tooltip">Youtube</div>
                    <span className="span-about"><FaYoutube className="fab fa-twitter" /></span>
                </div>
            </div>
        </div>
    );
}

export default Cosial;