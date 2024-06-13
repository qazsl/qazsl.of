// a.js
import './a.css';
import React, { useRef, useState, useEffect } from 'react';
import videoFile from './videos/А.mp4';
import playIcon from './img/play.png'; // Путь к изображению кнопки воспроизведения
import { Link } from 'react-router-dom';

function A_alphabet() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
  };


  const handleVideoClick = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.play();
      setIsPlaying(true);
    }
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className='container-video'>
      <div className='video-title'>
        <video ref={videoRef} src={videoFile} id='video-a' onClick={handleVideoClick}></video>
        {!isPlaying && (
          <button className='play-pause-button' onClick={handleVideoClick}>
            <img src={playIcon} id='play-img' alt='Play' />
          </button>
        )}
        <h2>А Дактилі | QazSL</h2>
        <hr></hr>
        <h4>Жұдырығыңызды түйіңіз. Сондай-ақ адамдар сіздің қимылыңызды көруі үшін қолыңызды аузыңызға жақын ұстауыңыз керек</h4>
      </div>
    </div>
  );
}

export default A_alphabet;
