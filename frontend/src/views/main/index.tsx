import styles from "./main-view.module.scss";
import SubmitButton, {SubmitButtonActions} from "../../components/submit-button";
import React from "react";
import Header from "../../components/header";

function MainView() {
    return (
        <div className={styles.main_page}>
            <Header />
            <div className={styles.main_page__text}>
                YouGif - это сервис для получения самых классных гифок из видео с платформы YouTube.
                Всего пару кликов и твоя гифка готова!
            </div>
            <SubmitButton title={"Поехали!"} action={SubmitButtonActions.NEXT_STAGE} />
        </div>
    );
}

export default MainView;
