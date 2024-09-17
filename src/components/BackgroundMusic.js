import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      if (audio) {
        audio.play().catch((error) => {
          console.error("Failed to play audio automatically:", error);
        });
      }
    };

    // Attempt to play audio on component mount
    playAudio();

    // Add event listener to play audio on user interaction if autoplay fails
    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/audio/bgm.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
