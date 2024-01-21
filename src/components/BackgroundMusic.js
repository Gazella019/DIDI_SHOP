import React, { useEffect } from 'react';

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = new Audio('/audio/bgm.mp3');
    audio.loop = true; // 循環播放
    audio.play();

    return () => {
      // 清理資源
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null; // 這個組件不需要渲染任何內容
};

export default BackgroundMusic;
