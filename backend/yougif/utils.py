import urllib.request
import youtube_dl

from rest_framework.exceptions import ValidationError


class YouTubeVideo:
    def __init__(self, url: str):
        try:
            self._data = youtube_dl.YoutubeDL().extract_info(url, download=False)
            self.video_url = next(
                data['url'] for data in self._data['formats'] if 'none' not in [data['acodec'], data['vcodec']]
            )
            self.title = self._data['title']
        except Exception:
            raise ValidationError({"message": 'Incorrect URL'})

    def download_video(self):
        urllib.request.urlretrieve(self.video_url, f'{self.title}.mp4')

    def cleanup(self):
        urllib.request.urlcleanup()
