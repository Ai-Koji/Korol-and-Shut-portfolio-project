from django.shortcuts import render
from .models import *
from biography.models import *

def main(request):
    videos = Video.objects.all()
    images = Image.objects.all()
    member_list = Member.objects.filter(is_main=True)


    return render(request, "gallery.html", {"member_list": member_list, "videos": videos, "images": images})