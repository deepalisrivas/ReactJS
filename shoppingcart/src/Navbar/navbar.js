import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";




class Nav extends Component {
  render() {

    return(
        <nav>
          <div className="inner-container">
            <ul>
              <li>
                <NavLink to="/">Home </NavLink>
              </li>
              <li>
                <NavLink to="/"> About</NavLink>
              </li>
              <li>
                <NavLink to="/">Shop </NavLink>
              </li>
              <li>
                <NavLink to="/">Help </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                  Your Cart({this.props.items.length})
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
    )

  };
}
const mapStateToProps = (state) =>{
  return{
    items:state.addedItems
  }
}



export default connect(mapStateToProps)(Nav);
