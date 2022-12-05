from rest_framework import status
from rest_framework.decorators import api_view
from django.http import JsonResponse

from yougif import utils
import urllib.request


@api_view()
def download_youtube_video(request):
    data = utils.YouTubeVideo(
        url=request.query_params.get('url', None)
    )
    start_time, end_time = request.query_params.get('start_time', None), request.query_params.get('end_time', None)
    title = data.title
    video_url = data.video_url
    urllib.request.urlretrieve(video_url, f'{title}.mp4')
    return JsonResponse(
        data={
            "title": title,
            "url": video_url,
            "start_time": start_time,
            "end_time": end_time
        },
        status=status.HTTP_200_OK
    )
