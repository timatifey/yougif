 export function getVideoIDFromLink(link: string) {
    let supposedVideoID = link.split('\?v=')[1];
    if (!supposedVideoID) {
        supposedVideoID = link.split('\/')[3];
        if (!supposedVideoID) {
            return null;
        }
    }
    return supposedVideoID;
}
