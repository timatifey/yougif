import {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/rootReducer";
import {getVideoDuration} from "../../api/getVideoDuration";
import {
    convertSecondsToTimeString,
    convertTimeStringToSeconds,
    getTimeInSecondsFromYTTimeString
} from "../../helpers/time-converter";
import styles from './time-format-with-widget.module.scss';
import {setDuration} from "../../app/form-data/formDataSlice";
import {incrementStage} from "../../app/stage/stageSlise";

const TIME_REG = new RegExp('[0-9]{2,}:[0-9]{2}:[0-9]{2}');

function TimeFormWithWidget() {
    const [fromValue, setFromValue] = useState('00:00:00');
    const [toValue, setToValue] = useState('00:00:00');
    const dispatch = useDispatch();
    let max = useRef<number>(0);
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const videoID = useSelector((state: RootState) => state.formData.videoID);
    const requestLink = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=contentDetails&key=${API_KEY}`;

    useEffect(() => {
        getVideoDuration(requestLink)
            .then(r => {
                max.current = getTimeInSecondsFromYTTimeString(r);
                setToValue(convertSecondsToTimeString(max.current));
            });
    }, [requestLink]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(TIME_REG!.test(fromValue), TIME_REG!.test(toValue))
        if (!TIME_REG.test(fromValue) || !TIME_REG.test(toValue)) {
            return;
        }
        const fromValueInSeconds = convertTimeStringToSeconds(fromValue);
        const toValueInSeconds = convertTimeStringToSeconds(toValue);
        console.log(fromValueInSeconds, toValueInSeconds, fromValueInSeconds + toValueInSeconds)
        if (fromValueInSeconds < 0) {
            return;
        }
        if (toValueInSeconds > max.current) {
            return;
        }
        console.log(fromValueInSeconds, toValueInSeconds, fromValueInSeconds + toValueInSeconds)
        if (fromValueInSeconds + toValueInSeconds > 60) {
            return;
        }
        dispatch(setDuration({ start: fromValueInSeconds, end: toValueInSeconds }));
        dispatch(incrementStage());
    }

    function handleFromChange(e: ChangeEvent<HTMLInputElement>) {
        setFromValue((e.target as HTMLInputElement).value);
    }

    function handleToChange(e: ChangeEvent<HTMLInputElement>) {
        setToValue((e.target as HTMLInputElement).value);
    }

    return (
        <>
            <div className={styles.fields_and_widget}>
                <form className={styles.fields_and_widget__fields} onSubmit={handleSubmit}>
                    <label className={styles.fields_and_widget__fields__label}>
                        От:
                        <input className={styles.fields_and_widget__fields__input}
                               type="text"
                               value={fromValue}
                               onChange={handleFromChange}/>
                    </label>
                    <label className={styles.fields_and_widget__fields__label}>
                        До:
                        <input className={styles.fields_and_widget__fields__input}
                               type="text"
                               value={toValue}
                               onChange={handleToChange}/>
                    </label>
                </form>
                <iframe className={styles.fields_and_widget__widget}
                        src={`https://www.youtube.com/embed/${videoID}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>

            <button className={styles.submit__button}
                    type="button"
                    onSubmit={handleSubmit}
                    onClick={handleSubmit}>
                Супер
            </button>
        </>
    );
}

export default TimeFormWithWidget;
