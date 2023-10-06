import React, { useState ,useRef, useEffect} from "react";
import audioSrc from "../audio/bewafa.mp3";
const Beat = (props) => {
  const [cartadd, setcartadd] = useState("Add To Cart");
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
        return () => {
          audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
      }, []);
  const container: React.CSSProperties = {
    margin: "10vh",
    color: "white",
    padding: "10px 10px 0 10px",
    width: "200px",
    height: "300px",
    background: "rgb(20 20 20 / 70%)",
    border: "1px solid white",
    overflow: "hidden",
    boxShadow: "#ffffff3a 5px 5px 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "12px",
  };
  const audio: React.CSSProperties = {
    width: "70px",
  };
  const image: React.CSSProperties = {
    marginTop: "20px",
    height: "80px",
    width: "80px",
    cursor: `${isHovering ? "pointer" : "default"}`,
  };

  const songName: React.CSSProperties = {
    margin: "5px",
    fontSize: "25px",
    fontFamily: "Lucida Handwriting, cursive",
    textAlign: "front",
    letterSpacing: ".05em",
  };
  const cart: React.CSSProperties = {
    marginTop: "auto",
    color: "white",
    width: "200px",
    height: "50px",
    border: "1px solid white",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    borderRadius: "0  0 12px 12px",
    cursor: `${isHovering1 ? "pointer" : "default"}`,
  };
  const inp: React.CSSProperties = {
    width: '100%',
  height: '3px',
  accentColor: "rgb(117 69 112)",
  outline: "none",
  marginTop: "50px",
  };
  const trackDuration: React.CSSProperties = {
    display: "flex",
  alignItems: "center",
  justifyContent:"space-between",
  marginTop:"10px",
  };
  const trackDurationP: React.CSSProperties = {
    fontSize: "10px",
  fontWeight: "500",
  color: "#181,1F",
  margin: "0 60px 0 60px",
  };
  const cartText: React.CSSProperties = {
    padding: "8px",
    fontSize: "17px",
    fontFamily: "Lucida Handwriting, cursive",
    textAlign: "front",
    letterSpacing: ".05em",
  };
  const hoverin1 = () => {
    setIsHovering1(true);
  };
  const hoverout1 = () => {
    setIsHovering1(false);
  };
  const hoverin = () => {
    setIsHovering(true);
  };
  const hoverout = () => {
    setIsHovering(false);
  };
  const onClickHandler1 = () => {
    if (cartadd === "Add To Cart") setcartadd("Remove");
    else setcartadd("Add To Cart");
  };
  return (
    <div style={container}>
      <h2 style={songName}>{props.name}</h2>
      
    
          <img
        src={require("../images/play.png")}
        alt="beat-img"
        style={image}
        onClick={handlePlayPause}
        onMouseEnter={hoverin}
        onMouseLeave={hoverout}
      />
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
      <div
        style={cart}
        onClick={onClickHandler1}
        onMouseEnter={hoverin1}
        onMouseLeave={hoverout1}
      >
        <h2 style={cartText}>{cartadd}</h2>
      </div>
    </div>
  );
};
export default Beat;
