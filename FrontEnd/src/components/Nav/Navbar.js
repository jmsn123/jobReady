import React from "react";
import {
  NavbarWrapper,
  NavContainer,
  NavContent,
  NavLink,
} from "./Navbar.styled";
function Navbar() {
  return (
    <NavContainer>
      <NavbarWrapper>
        <NavContent>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/notetaker">NoteTaker</NavLink>
        </NavContent>
      </NavbarWrapper>
    </NavContainer>
  );
}

export default Navbar;
