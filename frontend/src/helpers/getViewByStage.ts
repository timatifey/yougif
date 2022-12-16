import MainView from "../views/main";
import FirstStageView from "../views/first-stage";
import SecondStageView from "../views/second-stage";
import LoadingView from "../views/loading";
import ResultView from "../views/result";

const STEP_AND_VIEWS = [MainView, FirstStageView, SecondStageView, LoadingView, ResultView];

export function getViewByStage(stage: number): JSX.Element {
    return STEP_AND_VIEWS[stage - 1]();
}
