import SubmitButton, {SubmitButtonActions} from "../../components/submit-button";
import styles from "./second-view.module.scss";
import React from "react";
import Header from "../../components/header";

function SecondStageView() {
    return (
        <div className={styles.second_stage_page}>
            <Header />
            <div className={styles.second_stage_page__text}>2. Введите промежутки времени в формате:</div>
            <SubmitButton title={"Преобразуй"} action={SubmitButtonActions.NEXT_STAGE} />
        </div>
    );
}

export default SecondStageView;
