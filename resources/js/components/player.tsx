import React from "react";
import AudioPlayer from "react-h5-audio-player";

export const Player = () => (
    <AudioPlayer
        autoPlay
        showVolumeControl={false}
        showSkipControls={false}
        showLoopControl={false}
        src="/moonlight.mp3"
        onPlay={e => console.log("onPlay")}
        // other props here
    />
);
