import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0;
`;

const Box = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;

  background: rgba(86, 28, 36, 0.9);
  backdrop-filter: blur(10px);

  color: #E8D8C4;
  text-align: center;

  border-radius: 12px;

  a {
    color: #E8D8C4;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      color: #C7B7A3; 
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Box>
        <p>© 2026 Anime Opening Gallery</p>
        <p>
          Sosial Media: 
          <a href="https://github.com/KazuSide" target="_blank" rel="noreferrer"> Github</a> | 
          <a href="https://www.instagram.com/rael.re/" target="_blank" rel="noreferrer"> Instagram</a>
        </p>
      </Box>
    </Wrapper>
  );
}

export default Footer;