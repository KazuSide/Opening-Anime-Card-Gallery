import styled from "styled-components";

const Side = styled.div`
  position: fixed; 
  bottom: 0;
  width: 280px; 
  height: 100vh; 
  
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  
  z-index: 0; 
  pointer-events: none; 

  @media (max-width: 1250px) {
    display: none; 
  }
`;

const Left = styled(Side)`
  left: 0;
  background-image: url("/Images/anya-forger-pointing.png");
`;

const Right = styled(Side)`
  right: 0;
  background-image: url("/Images/Loid_Forger_Anime_3_png.png");
`;

function SideImages() {
  return (
    <>
      <Left />
      <Right />
    </>
  );
}

export default SideImages;