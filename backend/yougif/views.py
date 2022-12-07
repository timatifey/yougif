import sys

from rest_framework import status
from rest_framework.decorators import api_view
from django.http import JsonResponse

from yougif import utils
import urllib.request
from moviepy.editor import VideoFileClip


@api_view()
def convert_youtube_video(request):
    data = utils.YouTubeVideo(
        url=request.query_params.get('url', None)
    )
    start_time, end_time = request.query_params.get('start_time', None), request.query_params.get('end_time', None)
    title = data.title
    new_title = title.replace(' ', '_')[:5]
    video_url = data.video_url
    gif_filename = f'{new_title}.gif'

    print(f"Start downloading {title} by url={video_url}")
    filepath, _ = urllib.request.urlretrieve(
        url=video_url,
        reporthook=report_download_hook
    )
    print(f"\nFinish downloading {title} by url={video_url}")

    print(f"Start converting {title} into {gif_filename}")
    clip = VideoFileClip(filepath).subclip(start_time, end_time)
    clip.write_gif(gif_filename)
    print(f"Finish converting {title} into {gif_filename}")
    urllib.request.urlcleanup()
    return JsonResponse(
        data={
            "title": title,
            "url": video_url,
            "start_time": start_time,
            "end_time": end_time
        },
        status=status.HTTP_200_OK
    )


def report_download_hook(block_number, read_size, total_file_size):
    current = block_number * read_size
    percent = round(current / total_file_size * 100, ndigits=1)
    sys.stdout.write(f"\rDownloading status {percent}% [{current}/{total_file_size}]")
    sys.stdout.flush()
