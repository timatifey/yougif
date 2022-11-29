import styles from "./submit-button.module.scss";
import {useDispatch} from "react-redux";
import {incrementStage, setStage} from "../../app/stage/stageSlise";

export enum SubmitButtonActions {
    NEXT_STAGE,
    GO_TO_START
}

export interface SubmitButtonProps {
    title: string;
    action: SubmitButtonActions;
}

function SubmitButton({title, action}: SubmitButtonProps) {
    const dispatch = useDispatch()

    return (
        <button
            className={styles.button}
            type="button"
            onClick={() => {
                switch (action) {
                    case SubmitButtonActions.NEXT_STAGE: {
                        dispatch(incrementStage());
                        break;
                    }
                    default: {
                        dispatch(setStage(1));
                        break;
                    }
                }
            }
            }>
            {title}
        </button>
    );
}

export default SubmitButton;
