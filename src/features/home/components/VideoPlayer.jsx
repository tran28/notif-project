import React, { useRef, useState } from 'react';
import { IconPlayerPlay, IconPlayerPause } from '@tabler/icons-react';

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="relative w-full">
            <video ref={videoRef} src={src} className="object-cover min-h-full" controls={false} autoPlay muted loop playsInline />
            <button
                className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center"
                onClick={handlePlayPause}
            >
                {isPlaying ? (
                    <IconPlayerPause />
                ) : (
                    <IconPlayerPlay />
                )}
            </button>
        </div>
    );
};

export default VideoPlayer;