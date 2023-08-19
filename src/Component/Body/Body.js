import React, { useState } from "react";
import "./Body.css";
import { FaTeamspeak } from "react-icons/fa";
import { Alert, Button } from "react-bootstrap";
import { MdElectricBike } from "react-icons/md";


const Body = () => { 
    function AlertDismissible() {
        const [show, setShow] = useState(true);

        return (
            <>
                <Alert show={show} className="alert-body" variant="success">
                    <Alert.Heading> <MdElectricBike className="hi" /> Hey, nice to see you</Alert.Heading>
                    <p>
                        For Delivery{">>"} 01023456789
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-success">
                            Close Here
                        </Button>
                    </div>
                </Alert>

                {!show && <button
                    onClick={() => setShow(true)}
                    className="bo-buton">
                    call  Delivery
                    <span className="first"></span>
                    <span className="second"></span>
                    <span className="third"></span>
                    <span className="fourth"></span>
                </button>
                }
            </>
        );
    }

    return (
        <div className="Body-sec">
            <div className="order">
                <h3 className="h-order"> Food C<span>o</span>rner </h3>
                <p> Get Order Now <FaTeamspeak className="p-icon" /> </p>
            </div>

            <div className="bo-bu">
                {<AlertDismissible />}
            </div>
        </div>
    );
}

export default Body;