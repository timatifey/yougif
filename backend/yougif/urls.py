from django.urls import path

from . import views

urlpatterns = [
    path('youtube/', views.download_youtube_video),
]