import styled from "styled-components";

const Card = styled.div`
  /* Warna krem yang solid agar teks nyaman dibaca */
  background: rgba(232, 216, 196, 0.95); 
  color: #561C24;

  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  /* Memberikan bayangan halus */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  display: flex;
  flex-direction: column;
  height: 100%; /* Memastikan semua kartu di satu baris tingginya sama */
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  /* Rasio 16:9 agar gambar terlihat sinematik dan proporsional */
  aspect-ratio: 16 / 9; 
  overflow: hidden;
  background-color: #000; /* Placeholder jika gambar gagal muat */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Mengisi sisa ruang agar footer kartu sejajar */
  text-align: left; /* Teks rata kiri biasanya lebih rapi untuk daftar */
`;

const Title = styled.h2`
  /* Menggunakan font sistem yang tebal */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  line-height: 1.2;
  color: #561C24;
  
  /* Membatasi judul maksimal 2 baris agar tetap proporsional */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Info = styled.p`
  margin: 4px 0;
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 5px;

  /* Tambahkan sedikit aksen warna pada label */
  span {
    font-weight: 700;
    color: #6D2932;
  }
`;

const Tag = styled.span`
  display: inline-block;
  margin-top: auto; /* Mendorong tag ke paling bawah konten */
  padding: 4px 10px;
  background: #561C24;
  color: #E8D8C4;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 4px;
  width: fit-content;
  text-transform: uppercase;
`;

function MusicCard({ title, artist, anime, genre, creator, image }) {
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Info><span>Anime:</span> {anime}</Info>
        <Info><span>Artist:</span> {artist}</Info>
        <Info><span>Composer:</span> {creator}</Info>
        <Tag>{genre}</Tag>
      </Content>
    </Card>
  );
}

export default MusicCard;