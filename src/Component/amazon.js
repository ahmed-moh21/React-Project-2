import React from "react";
import { Posts } from "./Menu/data";
import Menu from "./Menu/Menu";

const Amazon = ({ handleClick, cart }) => {

    return (
        <section>

            {Posts.map((item) => (
                <Menu key={item.id} size={cart.length} item={item} handleClick={handleClick} />
            ))}

        </section>
    );
};

export default Amazon;