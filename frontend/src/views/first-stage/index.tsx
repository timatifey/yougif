import styles from "./first-stage-view.module.scss";
import Header from "../../components/header";
import LinkForm from "../../components/link-form";

function FirstStageView() {
    return (
        <div className={styles.first_stage_page}>
            <Header />
            <LinkForm />
        </div>
    );
}

export default FirstStageView;
