import React from 'react';
import { Carousel } from 'antd';

////////////////////////////////////////////////
const contentStyle: React.CSSProperties = {
    width: '80%',
    margin: 'auto',
    height: '600px',
    color: '#fff',
    textAlign: 'center',
    // background: '#ffffffcd',
    borderRadius: '10px',
};

const CarouselSection: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    background: '#ffffff7d',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: '0',
};

const headerCarousel: React.CSSProperties = {
    width: '400px',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '2.7rem',
    background: 'white',
    color: 'black',
    boxShadow: 'rgb(191 81 172 / 80%) 0px 0px 25px 0px',
    // boxShadow: 'rgb(28 94 138) 0px 0px 25px 5px',
    borderRadius: '15px',
};

const embedVideoCarousel: React.CSSProperties = {
    width: '70%',
    height: '85%',
    marginTop: '10px',
    borderRadius: '5px',
    border: '0px solid rgba(255,255,255,0.6)',
    // boxShadow: 'rgb(191 81 172 / 80%) 0px 0px 25px 0px',
    boxShadow: 'rgb(28 94 138/ 80%) 0px 0px 15px 6px',
};
////////////////////////////////////////////////

const youtubeDatas = [
    {
        "title": "Street Riot | EDM | NullStrange",
        "desc": "Presenting to you Street Riot, a DubStep EDM. Enjoy. Music: NullStrange Edit: not.pxll Clips used: ...",
        "thumbnailURL": "https://i.ytimg.com/vi/5ZPo0bLW4Iw/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/5ZPo0bLW4Iw"
    },
    {
        "title": "Rahasya | Dark Trance Type Music | NullStrange",
        "desc": "Presenting to you Rahasya, my original work. Enjoy the dark feel. Music: NullStrange Video Edit: not.pxll Buy my Beats:- E-mail ...",
        "thumbnailURL": "https://i.ytimg.com/vi/J1Rb4-p4m9E/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/J1Rb4-p4m9E"
    },
    {
        "title": "WITCHES | DubStep Music | NullStrange",
        "desc": "Presenting to you my 1st #dubstepmusic which squeezed me to its extent. Hope you like the music. Appreciate it by sharing it with ...",
        "thumbnailURL": "https://i.ytimg.com/vi/EHsQ4qOvy1I/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/EHsQ4qOvy1I"
    },
    {
        "title": "Mohabbatein Love Themes Piano Cover | Themes On Keys #shorts",
        "desc": "For business related queries Mail at:- saranshsrivastava213@gmail.com Connect with me on: Instagram: ...",
        "thumbnailURL": "https://i.ytimg.com/vi/Le8a7dkU00k/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/Le8a7dkU00k"
    },
    {
        "title": "Pata Nahi Kis Roop Mai Aakar Narayan Mil Jayega (LoFi REMIX) | Ram Darshan | Narci | Hindi Rap Song",
        "desc": "Presenting to you the #lofi #remix of the song Ram Darshan by Narci. Remixed Music, Mix & Master : NullStrange Original Credit ...",
        "thumbnailURL": "https://i.ytimg.com/vi/mSCKNzWAWuA/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/mSCKNzWAWuA"
    },
    {
        "title": "Pyar Hame Kis Mod Pe Le Aaya | TRAP REMIX | Kishore Kumar | NullStrange",
        "desc": "Presenting to you the #trapremix of #kishorekumar legendary song Pyar Hame Kis Mod Pe Le Aaya from movie Satte Pe Satta.",
        "thumbnailURL": "https://i.ytimg.com/vi/lfI1TRO0HM0/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/lfI1TRO0HM0"
    },
    {
        "title": "NO LOVE(Remix) | Club Mix | NullStrange | 2022",
        "desc": "Presenting to you the remix of #trendingsong NO LOVE by Shubh. Music(remixed), Mix & Master: NullStrange aks Saransh ...",
        "thumbnailURL": "https://i.ytimg.com/vi/c6GJ8Oo3YDU/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/c6GJ8Oo3YDU"
    },
    {
        "title": "HAAL KYA HAI DILON KA NA PUCHO SANAM (Remix) |  हाल क्या है दिलों | Kishore Kumar | Anokhi Ada",
        "desc": "Presenting to you the remix of Haal Kya Hai Dilon Ka in a trap type music. Hope you enjoyed : ) Music, Mixing & Mastering ...",
        "thumbnailURL": "https://i.ytimg.com/vi/fUPX4w_e6ns/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/fUPX4w_e6ns"
    },
    {
        "title": "I&#39;M STILL ALIVE | Club EDM Music | NullStrange | 2022",
        "desc": "Presenting to you \"I'm Still Alive\" Music with taste of #edm type and #rockmusic Music, Mixing & Mastering:- NullStrange Video ...",
        "thumbnailURL": "https://i.ytimg.com/vi/eSQsq4T3KIU/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/eSQsq4T3KIU"
    },
    {
        "title": "Mundiya To Bach Ke Rahi | Bass Remix | NullStrange | 2022",
        "desc": "Presenting to you the #remix of Mundiya To Bach Ke Rahi. Highly famous and trending song no matter what the generation is.",
        "thumbnailURL": "https://i.ytimg.com/vi/AyO_vgahqC4/hqdefault.jpg",
        "videoURL": "https://www.youtube.com/embed/AyO_vgahqC4"
    }
];

// async function fetchData() {
//     const res = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXN8cHYYPqdBkTV3WN7LWqw&maxResults=10&order=date&type=video&key=AIzaSyCmLilBQuwfFpLyMvRjuz_moVvGXhvfeTY');
//     res.setHeader('Permissions-Policy', 'ch-ua-form-factor');
//     const objectData = await res.json();
//     const datas = Object.entries(objectData.items);

//     for (const data of datas) {
//         const youtubeData = new Object();
//         youtubeData.title = data[1].snippet.title;
//         youtubeData.desc = data[1].snippet.description;
//         youtubeData.thumbnailURL = data[1].snippet.thumbnails.high.url;
//         youtubeData.videoURL = "https://www.youtube.com/embed/" + data[1].id.videoId;

//         youtubeDatas.push(youtubeData);
//     }
// }

// fetchData();
// console.log(youtubeDatas);

const Carousels: React.FC = () => (
    <>
    <div style={CarouselSection}>
    <h1 style={headerCarousel}>Some of my works</h1>
        <Carousel autoplay>
            <div>
                <div style={contentStyle}>
                    <iframe style={embedVideoCarousel} title={youtubeDatas[0].title} src={youtubeDatas[0].videoURL} allow="accelerometer; picture-in-picture; web-share; allowfullscreen"></iframe>
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <iframe style={embedVideoCarousel} title={youtubeDatas[1].title} src={youtubeDatas[1].videoURL} allow="accelerometer; picture-in-picture; web-share; allowfullscreen"></iframe>
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <iframe style={embedVideoCarousel} title={youtubeDatas[2].title} src={youtubeDatas[2].videoURL} allow="accelerometer; picture-in-picture; web-share; allowfullscreen"></iframe>
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <iframe style={embedVideoCarousel} title={youtubeDatas[3].title} src={youtubeDatas[3].videoURL} allow="accelerometer; picture-in-picture; web-share; allowfullscreen"></iframe>
                </div>
            </div>
        </Carousel>
    </div>
    </>  
);

export default Carousels;