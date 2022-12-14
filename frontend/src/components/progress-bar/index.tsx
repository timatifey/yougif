import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/rootReducer";
import {getGif} from "../../api/getGif";
import {setGifLink} from "../../app/gif-link/gifLinkSlice";
import {incrementStage} from "../../app/stage/stageSlise";
import styles from "./progress-bar.module.scss";

function ProgressBar() {
    const formData = useSelector((state: RootState) => state.formData);
    const dispatch = useDispatch();

    useEffect(() => {
        getGif(formData).then((link) => {
                dispatch(setGifLink(link));
                dispatch(incrementStage());
            }
        )
    });

    return (
        <div className={styles.loader}></div>
    );
}

export default ProgressBar;
