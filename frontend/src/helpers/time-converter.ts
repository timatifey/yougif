export function getTimeInSecondsFromYTTimeString(YTTime: string): number {
    let splitedTime = YTTime.split('PT')[1].split('H');
    let hours = 0;
    if (splitedTime.length > 1) {
        hours = Number(splitedTime[0]) * 3600;
        splitedTime = [splitedTime[1]];
    } else {
        splitedTime = [splitedTime[0]];
    }
    let minutes = Number(splitedTime[0].split('M')[0]) * 60;
    let seconds = Number(splitedTime[0].split('M')[1].split('S')[0]);
    return hours + minutes + seconds;
}

export function convertTimeStringToSeconds(time: string) {
    const parts = time.split(':');
    const hours = Number(parts[0]) * 3600;
    const minutes = Number(parts[1]) * 60;
    const seconds = Number(parts[2]);
    return hours + minutes + seconds;
}

export function convertSecondsToTimeString(time: number): string {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = time - hours * 3600 - minutes * 60;

    let hoursString = String(hours);
    if (hours < 10) {
        hoursString = `0${hoursString}`
    }

    let minutesString = String(minutes);
    if (minutes < 10) {
        minutesString = `0${minutesString}`
    }

    let secondsString = String(seconds);
    if (seconds < 10) {
        secondsString = `0${secondsString}`
    }

    return `${hoursString}:${minutesString}:${secondsString}`;
}
