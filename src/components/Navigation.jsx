import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const Navigation = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>
          <img src="./img/LOGO.png" alt="logo" />
        </Logo>
        <Menu>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <NavLink
                      to="/"
                      className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                      Accueil
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      to="/about"
                      className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                      A propos de moi
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      to="/contact"
                      className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Menu>
      </Nav>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.div`
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 100px;
  }
`;

const Menu = styled.div`
  .nav-item {
    font-size: 20px;

    a {
      color: white;
      margin: auto 10px;
      text-decoration: none;
    }
    .active {
      border-bottom: solid 2px white;
    }
    .nav-active {
      position: relative;

      &::after {
        content: "";
        height: 4px;
        width: 0;
        background: red;
        position: absolute;
        border-radius: 10px;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        -webkit-animation: anim 0.3s ease forwards;
        animation: anim 0.6s ease forwards;

        @-webkit-keyframes anim {
          to {
            width: 100%;
          }
        }

        @keyframes anim {
          to {
            width: 100%;
          }
        }
      }
    }
  }
`;
