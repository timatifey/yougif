import styles from "./loading-view.module.scss";
import Header from "../../components/header";
import ProgressBar from "../../components/progress-bar";
import React from "react";

function LoadingView() {
    return (
        <div className={styles.loading_page}>
            <Header />
            <div className={styles.loading_page__text}>Ждём-с...</div>
            <ProgressBar />
        </div>
    );
}

export default LoadingView;
