import sys

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from django.http import FileResponse, JsonResponse

from yougif import utils


@api_view()
def convert_youtube_video(request):
    try:
        url = request.query_params.get('url', None)
        start_time, end_time = request.query_params.get('start_time', None), request.query_params.get('end_time', None)

        if url is None or start_time is None or end_time is None:
            raise ValueError("You need url, start_time, end_time params")

        start_time, end_time = int(start_time), int(end_time)

        data = utils.YouTubeVideo(url=url)

        FIVE_MINUTES = 60 * 5

        if data.duration >= FIVE_MINUTES:
            raise ValidationError("Video duration greater than 5 minutes")

        if not 0 <= start_time < end_time <= data.duration:
            raise ValidationError("Not valid condition: 0 <= start time < end time <= video duration")

        gif_length = end_time - start_time
        TEN_SECONDS = 10
        if gif_length > TEN_SECONDS:
            raise ValidationError("You can't convert video into more than 10 second gif file")

        print(f"Start downloading {data.title} by url={data.video_url}")
        video_filepath = data.download_video(report_download_hook)
        print(f"\nFinish downloading {data.title} by url={data.video_url}")

        print(f"Start converting {data.title}")
        gif_filepath = data.convert_video_into_gif(video_filepath, start_time, end_time)
        print(f"Finish converting {data.title}")

        data.cleanup()
        gif_file_stream = open(gif_filepath, 'rb')

        return FileResponse(gif_file_stream)
    except Exception as e:
        if hasattr(e, 'detail'):
            msg = e.detail[0]
        else:
            msg = str(e)
        return JsonResponse(
            data={"response": msg},
            status=status.HTTP_400_BAD_REQUEST
        )


def report_download_hook(block_number, read_size, total_file_size):
    current = block_number * read_size
    percent = round(current / total_file_size * 100, ndigits=1)
    sys.stdout.write(f"\rDownloading status {percent}% [{current}/{total_file_size}]")
    sys.stdout.flush()
