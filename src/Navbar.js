import React from "react";
import './App.css';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <div>
            <nav>
            <div>Brand</div>
        <ul>
            <Link to = "/">
            <li>home</li>
            </Link>
            <Link to ="/shop">
            <li>Shop</li>
            </Link>
            <Link to ="/cart">
            <li><FaShoppingCart className="icon"/>Cart</li>
            </Link>

        </ul>
        </nav>
        </div>

    )
}
export default Nav;