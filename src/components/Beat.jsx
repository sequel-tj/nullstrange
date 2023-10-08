import React, { useState ,useRef, useEffect} from "react";
const Beat = (props) => {
  const audioSrc  = props.src;
  const [cartadd, setcartadd] = useState("Add To Cart");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); 
  const audioRef = useRef(null);
    const handlePlay = () =>{
        audioRef.current.play();
        setIsPlaying(true);
    }
    const handlePause = ()=>{
        audioRef.current.pause();
        setIsPlaying(false);
    }
    const handlePlayPause = ()=>{
        if(isPlaying)
            handlePause();
        else
            handlePlay();
    }
    const handleTimeUpdate = ()=>{
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    }
    const handleSeek = (e) =>{
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }
    function formatDuration(durationSeconds){
        const min = Math.floor(durationSeconds / 60);
        const sec = Math.floor(durationSeconds%60);
        const formatSec = sec.toString().padStart(2,"0");
        return `${min}:${formatSec}`;
    }
    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      }, [audioRef]);
  const container: React.CSSProperties = {
    margin: "10vh",
    color: "white",
    padding: "10px 10px 0 10px",
    width: "300px",
    height: "400px",
    background: "rgb(20 20 20 / 70%)",
    border: "1px solid white",
    overflow: "hidden",
    boxShadow: "#ffffff3a 5px 5px 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "12px",
  };
  const album: React.CSSProperties = {
    height: "240px",
    width: "240px",
    borderRadius: "12px",
    cursor: "pointer",
  };
  const image: React.CSSProperties = {
    height: "45px",
    width: "45px",
    cursor: "pointer",
  };
  const songName: React.CSSProperties = {
    margin: "2px",
    fontSize: "20px",
    fontFamily: "Lucida Handwriting, cursive",
    textAlign: "front",
    letterSpacing: ".05em",
  };
  const cart: React.CSSProperties = {
    marginTop: "auto",
    color: "white",
    width: "300px",
    height: "50px",
    border: "1px solid white",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    borderRadius: "0  0 12px 12px",
    cursor:"pointer",
  };
  const player: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
    gap: "18px",
  }
  const playerContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "200px",
  }
  const inp: React.CSSProperties = {
    width: '100%',
  height: '3px',
  marginTop: '14px',
  accentColor: "rgb(117 69 112)",
  outline: "none",
  };
  const trackDuration: React.CSSProperties = {
    display: "flex",
  alignItems: "center",
  justifyContent:"space-between",
  margin:"4px",
  // gap: "90px",
  };
  const trackDurationP: React.CSSProperties = {
    fontSize: "10px",
  fontWeight: "500",
  color: "#181,1F",
  };
  const cartText: React.CSSProperties = {
    padding: "8px",
    fontSize: "17px",
    fontFamily: "Lucida Handwriting, cursive",
    textAlign: "front",
    letterSpacing: ".05em",
  };
  const onClickHandler1 = () => {
    if (cartadd === "Add To Cart") setcartadd("Remove");
    else setcartadd("Add To Cart");
  };
  return (
    <div style={container}>
      <h2 style={songName}>{props.name}</h2>
      
          <img src = {props.img} style = {album}></img>
      <div style = {player}>
          <img
            src={ isPlaying ? require("../images/pause.png") : require("../images/play.png")}
            alt="beat-img"
            style={image}
            onClick={handlePlayPause}
          />
          <div style = {playerContainer}>
                <input
                  style={inp}
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                />
          
                <audio ref={audioRef} src = {audioSrc}></audio>
          
                <div style = {trackDuration}>
                  <p style = {trackDurationP}>{formatDuration(currentTime)}</p>
                  <p style = {trackDurationP}>{formatDuration(duration)}</p>
                </div>
          </div>
      </div>
      <div
        style={cart}
        onClick={onClickHandler1}
      >
        <h2 style={cartText}>{cartadd}</h2>
      </div>
    </div>
  );
};
export default Beat;
