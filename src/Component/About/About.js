import React from "react";
import "./About.css";
import Cosial from "../Cosial/Cosial";
import delMan from "../Image/delMan.jpg"

 
const About = () => {
/* 
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
            e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('active');
        });

        // Initial animation
        setTimeout(() => {
            span.classList.add('active');
        }, 750 * (idx + 1))
    }); */

    return (
        <div className="about-sec">
            <div className="about-img" style={{ backgroundImage: `url(${delMan})` }}>
                <div className="con-ab">
                    <div className="word">
                        <span className="active">A</span>
                        <span className="active">B</span>
                        <span className="active">O</span>
                        <span className="active">U</span>
                        <span className="active">T</span>
                    </div>
                </div> 
            </div>
            <p className="lorem-ab">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <Cosial />
        </div>
    );
}

export default About;