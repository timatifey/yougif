export async function getVideoDuration(request: string) {
    const res = await fetch(`${request}`);
    const data = await res.json();
    return data.items[0].contentDetails.duration;
}
