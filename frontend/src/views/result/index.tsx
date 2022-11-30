import SubmitButton, {SubmitButtonActions} from "../../components/submit-button";
import styles from "./result-view.module.scss";
import React from "react";
import Header from "../../components/header";

function ResultView() {
    return (
        <div className={styles.result_page}>
            <Header />
            <div className={styles.result_page__text}>Готово! Вот ваша гифка</div>
            <SubmitButton title={"Скачать"} action={SubmitButtonActions.GO_TO_START} />
        </div>
    );
}

export default ResultView;
