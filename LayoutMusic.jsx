import styled from "styled-components"; 
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import MusicList from "./MusicList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideImages from "./SideImages";

const MainContent = styled.div`
  max-width: 800px; 
  margin: 0 auto;
  padding: 40px;
  background: rgba(86, 28, 36, 0.7); 
  backdrop-filter: blur(15px); 
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  position: relative;
  z-index: 5;
`;

function LayoutMusic() {
  const musicData = [
      { id: 1, title: "Gurenge", artist: "LiSA", anime: "Demon Slayer", genre: "Rock", creator: "Yuki Kajiura", image: "https://4kwallpapers.com/images/walls/thumbs_3t/23616.jpg" },
      { id: 2, title: "Unravel", artist: "TK", anime: "Tokyo Ghoul", genre: "Alternative Rock", creator: "TK", image: "https://4kwallpapers.com/images/walls/thumbs_3t/17922.jpg" },
      { id: 3, title: "Silhouette", artist: "Kana-Boon", anime: "Naruto", genre: "Rock", creator: "Kana-Boon", image: "https://4kwallpapers.com/images/walls/thumbs_3t/20031.jpg" },
      { id: 4, title: "Kaikai Kitan", artist: "Eve", anime: "Jujutsu Kaisen", genre: "J-Pop", creator: "Eve", image: "https://wallpapercave.com/wp/wp13408038.jpg" },
      { id: 5, title: "Again", artist: "YUI", anime: "FMAB", genre: "Pop Rock", creator: "YUI", image: "https://wallpapercave.com/wp/wp12579594.jpg" },
      { id: 6, title: "Crossing Field", artist: "LiSA", anime: "SAO", genre: "J-Pop", creator: "LiSA", image: "https://wallpapercave.com/wp/wp1845587.jpg" },
      { id: 7, title: "Blue Bird", artist: "Ikimono Gakari", anime: "Naruto", genre: "Pop", creator: "Ikimono Gakari", image: "https://4kwallpapers.com/images/walls/thumbs_3t/25016.jpg" },
      { id: 8, title: "The Hero!!", artist: "JAM Project", anime: "One Punch Man", genre: "Rock", creator: "JAM Project", image: "https://wallpapercave.com/wp/wp14504336.png" },
      { id: 9, title: "Inferno", artist: "Mrs. GREEN APPLE", anime: "Fire Force", genre: "Rock", creator: "Mrs. GREEN APPLE", image: "https://wallpapercave.com/wp/wp10286760.jpg" },
      { id: 10, title: "Cry Baby", artist: "HIGE DANdism", anime: "Tokyo Revengers", genre: "Pop", creator: "HIGE DANdism", image: "https://wallpapercave.com/uwp/uwp4502455.jpeg" },
      { id: 11, title: "Idol", artist: "YOASOBI", anime: "Oshi no Ko", genre: "J-Pop", creator: "Ayase", image: "https://4kwallpapers.com/images/walls/thumbs_3t/16193.jpg" },
      { id: 12, title: "Bling-Bang-Bang-Born", artist: "Creepy Nuts", anime: "Mashle", genre: "Hip Hop", creator: "DJ Matsunaga", image: "https://4kwallpapers.com/images/walls/thumbs_3t/14923.jpeg" },
      { id: 13, title: "Specialz", artist: "King Gnu", anime: "Jujutsu Kaisen", genre: "J-Rock", creator: "Daiki Tsuneta", image: "https://4kwallpapers.com/images/walls/thumbs_3t/24150.jpg" },
      { id: 14, title: "Kick Back", artist: "Kenshi Yonezu", anime: "Chainsaw Man", genre: "J-Rock", creator: "Kenshi Yonezu", image: "https://4kwallpapers.com/images/walls/thumbs_3t/15442.jpg" },
      { id: 15, title: "Where Our Blue Is", artist: "Tatsuya Kitani", anime: "Jujutsu Kaisen", genre: "Pop Rock", creator: "Tatsuya Kitani", image: "https://4kwallpapers.com/images/walls/thumbs_3t/25230.jpg" },
      { id: 16, title: "Shinzou wo Sasageyo!", artist: "Linked Horizon", anime: "Attack on Titan", genre: "Symphonic Rock", creator: "Revo", image: "https://4kwallpapers.com/images/walls/thumbs_3t/16944.jpg" },
      { id: 17, title: "Peace Sign", artist: "Kenshi Yonezu", anime: "My Hero Academia", genre: "Rock", creator: "Kenshi Yonezu", image: "https://4kwallpapers.com/images/walls/thumbs_3t/25013.jpg" },
      { id: 18, title: "Mixed Nuts", artist: "HIGE DANdism", anime: "Spy x Family", genre: "Pop", creator: "Satoshi Fujihara", image: "https://4kwallpapers.com/images/walls/thumbs_3t/24443.png" },
  ];

  return (
    <>
      <SideImages />
      <Navbar />
      <Header /> 
      <div className={styles.container}>
        <MainContent>
          <MusicList musicData={musicData} />
        </MainContent>
      </div>
      <Footer /> 
    </>
  );
}

export default LayoutMusic;