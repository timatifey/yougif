import urllib.request
import youtube_dl
from moviepy.editor import VideoFileClip

from rest_framework.exceptions import ValidationError

MAX_LENGTH_FILENAME = 10


class YouTubeVideo:
    def __init__(self, url: str):
        try:
            self._data = youtube_dl.YoutubeDL().extract_info(url, download=False)
            self.video_url = next(data['url'] for data in self._data['formats'] if data['vcodec'] != 'none')
            self.title = self._data['title']
            self.duration = self._data['duration']
        except Exception:
            raise ValidationError({"message": 'Incorrect URL'})

    def download_video(self, report_download_hook):
        filepath, _ = urllib.request.urlretrieve(
            url=self.video_url,
            reporthook=report_download_hook
        )
        return filepath

    def convert_video_into_gif(self, filepath, start_time, end_time):
        clip = VideoFileClip(filepath).subclip(start_time, end_time)
        gif_filename = self.title.replace(' ', '_')
        if len(gif_filename) > MAX_LENGTH_FILENAME:
            gif_filename = gif_filename[:MAX_LENGTH_FILENAME]
        gif_filename = f'{gif_filename}.gif'
        clip.write_gif(gif_filename)
        return gif_filename

    @staticmethod
    def cleanup():
        urllib.request.urlcleanup()
