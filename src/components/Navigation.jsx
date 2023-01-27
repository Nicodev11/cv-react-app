import React from "react";
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
                    <a class="nav-link active" aria-current="page" href="#">
                      Accueil
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                    À propos de moi
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact
                    </a>
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
  font-size: 25px;
  a {
    color: white;
    margin: auto 10px;
  }
  .active {
    color: red;
    border-bottom: solid 3px red;
    
  }
  
}
`;
