import {
    convertSecondsToTimeString,
    convertTimeStringToSeconds,
    getTimeInSecondsFromYTTimeString
} from "../src/helpers/time-converter";

test('Convert YouTube time string to seconds', () => {
    expect(getTimeInSecondsFromYTTimeString('PT0H1M30S')).toBe(90);
})

test('Convert time string to seconds', () => {
    expect(convertTimeStringToSeconds('00:03:24')).toBe(204);
})

test('Convert seconds to time string', () => {
    expect(convertSecondsToTimeString(20)).toBe('00:00:20');
})
