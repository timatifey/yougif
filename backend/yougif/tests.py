from rest_framework import status
from rest_framework.test import APIClient
from django.test import SimpleTestCase
from .utils import YouTubeVideo
import json


class YouGifTestCase(SimpleTestCase):

    def setUp(self):
        self.client = APIClient()

    def test_get_youtube_data(self):
        data = YouTubeVideo(url='https://www.youtube.com/watch?v=dQw4w9WgXcQ&type=video')
        self.assertEqual(data.title, 'Rick Astley - Never Gonna Give You Up (Official Music Video)')
        self.assertEqual(data.duration, 212)

    def test_empty_request(self):
        response = self.client.get('/convert/')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_empty_times(self):
        response = self.client.get(
            '/convert/',
            **{'QUERY_STRING': 'url=https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            json.loads(response.content).get('response'),
            'You need url, start_time, end_time params'
        )

    def test_time_greater_than_duration(self):
        response = self.client.get(
            '/convert/',
            **{'QUERY_STRING': 'url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&start_time=0&end_time=500'}
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            json.loads(response.content).get('response'),
            'Not valid condition: 0 <= start time < end time <= video duration'
        )
