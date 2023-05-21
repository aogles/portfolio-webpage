from django.shortcuts import render
from rest_framework import generics
from .models import Blog, Contact
from .serializers import BlogSerializer, ContactSerializer


# Create your views here.


class BlogListAPIView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class ContactListAPIView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
