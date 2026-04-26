import styled from "styled-components";

const Nav = styled.div`
  background: rgba(86, 28, 36, 0.9);
  backdrop-filter: blur(10px);
  color: #E8D8C4;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h2`
  margin: 0;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #E8D8C4;

  &:hover {
    color: #C7B7A3;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>🎧 Anime Music</Logo>

      <Menu>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">Playlist</MenuItem>
        <MenuItem href="#">About</MenuItem>
      </Menu>
    </Nav>
  );
}

export default Navbar;