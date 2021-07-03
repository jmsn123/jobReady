import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
`;
export const NavbarWrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
export const NavContent = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 50px;
  background: transparent;
`;
export const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
`;
