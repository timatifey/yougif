from django.urls import path

from . import views

urlpatterns = [
    path('youtube/', views.convert_youtube_video),
]