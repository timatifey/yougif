export function getTimeStringFromYTTime(YTTime: string): string {
    let splitedTime = YTTime.split('PT')[1].split('H');
    let hours = '0';
    if (splitedTime.length > 1) {
        hours = splitedTime[0];
        splitedTime = [splitedTime[1]];
    } else {
        splitedTime = [splitedTime[0]];
    }
    console.log(splitedTime)
    let minutes = splitedTime[0].split('M')[0];
    if (Number(minutes) < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = splitedTime[0].split('M')[1].split('S')[0];
    if (Number(seconds) < 10) {
        seconds = `0${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}
