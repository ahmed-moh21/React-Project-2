import React from "react";
import "./Contact.css";
import conMan from "../Image/conMan.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdImportExport } from "react-icons/md";


const Contact = () => {
    return (
        <div className="contact-sec row">
            <div className="contact-img col-md-6" style={{ backgroundImage: `url(${conMan})` }} ></div>

            <div className="contain-about col-md-6">
                <div class="card-back">
                    <div class="center-wrap">
                        <div class="section text-center">
                            <h4 class=" sign-con mb-4 pb-3">Sign Up</h4>
                            <div class="form-group">
                                <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />
                                <AiOutlineUser class="input-icon uil uil-user" />
                            </div>
                            <div class="form-group mt-2">
                                <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                <MdOutlineAlternateEmail class="input-icon uil uil-at" />
                            </div>
                            <div class="form-group mt-2">
                                <textarea placeholder="Enter Message Here" className="bg-dark" ></textarea>
                            </div>
                            <button class="learn-more">Submit</button> {/* sssssssssssss */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Contact;