import React from "react";
import { NavLink } from "react-router-dom";
import {
  BrandAndToggle,
  Nav,
  NavBarCollapse,
  NavBarContainer,
  NavBarNav,
  NavItem,
  NavToggler,
} from "./nav.styled";

function NavBar() {
  return (
    <Nav>
      <NavBarContainer>
        <BrandAndToggle>
          <a href="index.html" class="navbar-brand">
            steve
          </a>
          <NavToggler type="button" class="navbar-toggler" id="navbar-toggler">
            <span>
              <i class="fas fa-bars"></i>
            </span>
          </NavToggler>
          <NavBarCollapse>
            <NavBarNav>
              {/* <li class="nav-item nav-active"> */}
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Portfolio</NavLink>
              </NavItem>
            </NavBarNav>
          </NavBarCollapse>
        </BrandAndToggle>
      </NavBarContainer>
    </Nav>
  );
}

export default NavBar;
