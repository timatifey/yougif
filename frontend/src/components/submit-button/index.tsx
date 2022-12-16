import styles from "./submit-button.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {incrementStage, setStage} from "../../app/stage/stageSlise";
import {downloadFile} from "../../helpers/downloadFile";
import {RootState} from "../../app/rootReducer";

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
    const gifLinkState = useSelector((state: RootState) => state.gifLink)

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
                        downloadFile(gifLinkState.link, 'gif');
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
