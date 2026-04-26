import MusicCard from "./MusicCard";

function MusicList({ musicData }) {

  // 🔥 group berdasarkan anime
  const grouped = musicData.reduce((acc, music) => {
    if (!acc[music.anime]) {
      acc[music.anime] = [];
    }
    acc[music.anime].push(music);
    return acc;
  }, {});

  return (
    <>
      {Object.keys(grouped).map((anime) => (
        <div key={anime} style={{ marginBottom: "40px" }}>
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", // Minimal 280px agar tidak kekecilan
            gap: "25px"
            }}>
        </div>
            <h2 style={{
                color: "#E8D8C4",
                marginBottom: "15px",
                borderLeft: "5px solid #E8D8C4",
                paddingLeft: "10px"
            }}>
                🎬 {anime}
            </h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px"
            }}>
                {grouped[anime].map((music) => (
                <MusicCard key={music.id} {...music} />
                ))}
            </div>

        </div>
      ))}
    </>
  );
}

export default MusicList;