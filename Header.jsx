import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0;
`;

const Box = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 30px;

  background: linear-gradient(135deg, #561C24, #6D2932);
  color: #E8D8C4;
  text-align: center;

  border-radius: 12px;
`;

function Header() {
  return (
    <Wrapper>
      <Box>
        <h1>🎵 Anime Opening Gallery</h1>
        <p>Kumpulan lagu opening anime by KazuTan</p>
      </Box>
    </Wrapper>
  );
}

export default Header;