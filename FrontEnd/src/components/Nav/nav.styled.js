import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../utils/devices";
export const Nav = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: var(--nero);
  width: 100%;
`;
export const NavBarContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  @media ${device.laptopS} {
    ${Nav} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  } ;
`;
export const BrandAndToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
export const NavBarCollapse = styled.div`
  height: 0;
  overflow: hidden;
  transition: var(--transition);
  @media ${device.laptopS} {
    height: 100%;
    flex: 1 0 auto;
  }
`;
export const NavBarNav = styled.ul`
  @media ${device.laptopS} {
    display: flex;
    justify-content: flex-end;
  }
`;

export const NavItem = styled.li`
  text-align: center;
  padding: 0.6rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    width: 0;
    height: 2px;
    background: var(--green);
    transition: var(--transition);
  }
  &:hover::after {
    width: 100px;
  }
  @media${device.laptopS} {
    margin: 0 0.5rem;
  }
`;

export const NavToggler = styled.button`
  display: none;
`;

export const NavLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.2rem;
  transition: var(--transition);
  &:hover {
    color: var(--green);
  }
`;
export const NavActive = styled.li`
  &${NavLink} {
    color: var(--green);
  }
`;
