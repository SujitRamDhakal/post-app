from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics


class PostListView(generics.ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class PostCreateView(generics.CreateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
