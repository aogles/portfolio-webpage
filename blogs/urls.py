from django.urls import path
from .views import BlogListAPIView, ContactListAPIView


urlpatterns = [
    path('blogs/', BlogListAPIView.as_view()),
    path('contacts/', ContactListAPIView.as_view()),
]
