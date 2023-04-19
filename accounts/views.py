from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import generics
from dj_rest_auth.registration.views import RegisterView
from rest_framework.response import Response
from .models import Profile

CustomUser = get_user_model()

# Create your views here.


class ProfileCreateAPIView(generics.CreateAPIView):
    queryset = Profile.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
