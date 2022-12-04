import styles from "./second-view.module.scss";
import Header from "../../components/header";
import TimeForm from "../../components/time-form";


function SecondStageView() {
    return (
        <div className={styles.second_stage_page}>
            <Header />
            <div className={styles.second_stage_page__text}>2. Введите промежутки времени в формате:</div>
            <TimeForm />
        </div>
    );
}

export default SecondStageView;
