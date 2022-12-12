import {formDataState} from "../app/form-data/formDataSlice";

export async function getGif(data: formDataState): Promise<string> {
    console.log('start');
    const urlParams = new URLSearchParams();
    urlParams.append('url', `https://youtu.be/${data.videoID}`);
    urlParams.append('start_time', String(data.duration.start));
    urlParams.append('end_time', String(data.duration.end));

    const res = await fetch(`http://localhost:8000/convert?${urlParams}`);
    console.log(res);
    const resData = await res.blob();
    return window.URL.createObjectURL(resData);
}
