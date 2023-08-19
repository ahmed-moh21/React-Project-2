import React from 'react';
import "./Card.css";
import { Posts } from '../Menu/data';
import { FiInfo } from "react-icons/fi";
import { TiPlus } from "react-icons/ti";
import Bay from "./pay"
import { BiMinusCircle } from "react-icons/bi";



const Card = () => {
  
  console.log()
  return (
    <div className="cardectino">
      <div className='card-post'>
        {Posts.map((item) => (
          <div key={item.id} className="wrapper-ca">
            <div className="container">
              <div className="tops" style={{
                backgroundImage: `url(${item.userImg})`
              }}></div>
              <div className="bottoms">
                <div className="lefts">
                  <div className="details">
                    <h1>{item.nameFood}</h1>
                    <p>{item.price}</p>
                  </div>
                  <div className="buy"><TiPlus

                    className="material-icons" />
                    <BiMinusCircle

                      className="material-icons" /></div>
                </div>

              </div>
            </div>
            <div className="inside">
              <div className="icon"><FiInfo /></div>
              <div className="contents">
                <table>
                  <tr>
                    <th>oRder :   {item.amount}</th>

                  </tr>
                  <tr style={{ marginTop: "5rem" }}>
                    <th>waite :   {item.time}</th>
                  </tr>
                  <tr style={{ marginTop: "10rem" }}>
                    <th>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. </th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        ))

        }
      </div>


      <div className='card-sale'>
      <div className="go-back">
  <a style={{ color: "silver"}} href="/menu" > <span></span> go Back </a>
</div>
        <Bay Posts={Posts} />
      </div>
    </div>
  );
}

export default Card;
