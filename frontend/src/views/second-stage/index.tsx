import styles from "./second-view.module.scss";
import Header from "../../components/header";
import TimeFormWithWidget from "../../components/time-form-with-widget";


function SecondStageView() {
    return (
        <div className={styles.second_stage_page}>
            <Header />
            <div className={styles.second_stage_page__text}>2. Введите промежутки времени в формате:</div>
            <TimeFormWithWidget />
        </div>
    );
}

export default SecondStageView;
