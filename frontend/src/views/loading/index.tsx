import styles from "./loading-view.module.scss";
import SubmitButton, {SubmitButtonActions} from "../../components/submit-button";
import Header from "../../components/header";

function LoadingView() {
    return (
        <div className={styles.loading_page}>
            <Header />
            <div className={styles.loading_page__text}>Ждём-с...</div>
            <SubmitButton title={"Далее"} action={SubmitButtonActions.NEXT_STAGE} />
        </div>
    );
}

export default LoadingView;
