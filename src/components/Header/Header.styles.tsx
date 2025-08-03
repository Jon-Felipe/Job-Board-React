import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px 20px;

  .header-title {
    font-size: 24px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 10px 100px;
  }
`;

export const NavLinksContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;

  .links-tablet {
    display: none;
  }

  .profile-buttonLink {
    width: 25px;
    height: 25px;
    cursor: pointer;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  .menu-toggle {
    width: 20px;
    height: 20px;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    .links-tablet {
      display: flex;
      align-items: center;
      column-gap: 15px;
      margin-right: 10px;

      a {
        padding: 0;
      }
    }

    .menu-toggle {
      display: none;
    }
  }
`;
