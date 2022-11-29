import {getViewByStage} from "../src/helpers/getViewByStage";
import MainView from "../src/views/main";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../src/app/rootReducer";

function MainPage() {
    const [view, setView] = useState<JSX.Element>(MainView);
    const stage = useSelector((state: RootState) => state.stage);

    useEffect(() => {
        setView(getViewByStage(stage.stage));
    }, [stage])

    return view;
}

export default MainPage;
