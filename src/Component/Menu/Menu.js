import React from "react";
import "./Meny.css";
import { FcShipped } from "react-icons/fc";
import { Button, Badge } from "react-bootstrap";

const Menu = ({ item, handleClick, size }) => {
    const { time, nameFood, price, userImg } = item;

    return (
        <div className="menu-card">


            <div className="count-ord">
                <a href="/card">
                    <Button className="bu-co-me" >
                        Ca<i>R</i>d
                    </Button>
                </a>

                <Button className="bu-co-me" >
                    Profile <Badge bg="secondary">{size} </Badge>
                </Button>
            </div>

            <ul  >
                <li className="booking-card" id="styl-im" style={{ backgroundImage: `url(${userImg})` }} >
                    <div className="book-container">
                        <div className="content">
                            <button
                                onClick={() => handleClick(item)}
                                className="btn">geT Order </button>
                        </div>
                    </div>
                    <div className="informations-container">
                        <h2 className="title">{nameFood}</h2>
                        <p className="sub-title">{time}{"    "}<FcShipped className="delv" /> </p>
                        <p className="price"><svg className="icon" style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                        </svg>{price}</p>
                        <div className="more-information">
                            <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
                        </div>
                    </div>
                </li>
            </ul>


        </div>
    );
}

export default Menu;
