import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/rootReducer";
import {getVideoDuration} from "../../api/getVideoDuration";
import {getTimeStringFromYTTime} from "../../helpers/time-converter";

function Slider() {
    const minDuration = '0:00:00';
    let maxDuration = '0:00:00';
    const startTime = useRef<HTMLInputElement>(null);
    const endTime = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const videoID = useSelector((state: RootState) => state.formData.videoID);
    const requestLink = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=contentDetails&key=${API_KEY}`;

    useEffect(() => {
        getVideoDuration(requestLink)
            .then(r => {
                maxDuration = getTimeStringFromYTTime(r);
                console.log(maxDuration);
                setIsLoading(false);
            });
    },)

    return (
        <div>In progress...</div>
    );
}

export default Slider;
