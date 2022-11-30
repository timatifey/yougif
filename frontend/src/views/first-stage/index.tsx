import styles from "./first-stage-view.module.scss";
import SubmitButton, {SubmitButtonActions} from "../../components/submit-button";
import Header from "../../components/header";

function FirstStageView() {
    return (
        <div className={styles.first_stage_page}>
            <Header />
            <div className={styles.first_stage_page__text}>1. Вставьте ссылку на YouTube видео:</div>
            <SubmitButton title={"Супер"} action={SubmitButtonActions.NEXT_STAGE} />
        </div>
    );
}

export default FirstStageView;
