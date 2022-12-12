import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/rootReducer";
import Image from 'next/image'

function GifPreviewWidget() {
    const gifLink = useSelector((state: RootState) => state.gifLink);

    return (
        <Image alt="Полученная гифка"
               src={gifLink.link}
               height={300}
               width={300} />
    );
}

export default GifPreviewWidget;
