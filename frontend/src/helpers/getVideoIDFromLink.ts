const REG =
   new RegExp('(https://www\.youtube.com/watch\?v=*)|(https://youtu\.be/*)');
export function getVideoIDFromLink(link: string) {
    if (REG.test(link)) {
        let supposedVideoID = link.split('\?v=')[1];
        if (!supposedVideoID) {
            supposedVideoID = link.split('\/')[3];
            if (!supposedVideoID) {
                return null;
            }
        }
        return supposedVideoID;
    }
}
