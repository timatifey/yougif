export async function getVideoDuration(request: string) {
    const res = await fetch(`${request}`);
    const data = await res.json();
    console.log(data);
    return data.items[0].contentDetails.duration;
}
