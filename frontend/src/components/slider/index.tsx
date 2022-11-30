import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/rootReducer";
import {getVideoDuration} from "../../api/getVideoDuration";

function Slider() {
    const minDuration = '0:00:00';
    let maxDuration = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const API_KEY = 'AIzaSyAh1IrF14LJMHYaepPW9nQ8Cdpmuc4CgkY';
    const videoID = useSelector((state: RootState) => state.formData.videoID);
    const requestLink = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=contentDetails&key=${process.env.YOUTUBE_API_KEY}`;

    useEffect(() => {
        getVideoDuration(requestLink)
            .then(r => {
                let splitedTime = r.split('PT')[1].split('H');
                let hours = 0;
                if (splitedTime.length > 1) {
                    hours = splitedTime[0];
                }
                splitedTime = splitedTime[1];
                const minutes = splitedTime[0].split('M')[0];
                const seconds = splitedTime[0].split('M')[1].split('S')[0];
                //maxDuration=`${hours}:${minutes}:${seconds}`;
                setIsLoading(false);
            });
    },)

    return (
        <div>In progress...</div>
    );
}

export default Slider;
