from django.shortcuts import render
from .models import *
from biography.models import *

def main(request):
    video_list = Video.objects.all()
    image_list = Image.objects.all()
    member_list = Member.objects.filter(is_main=True)


    return render(request, "gallery.html", {"member_list": member_list, "video_list": video_list, "images": image_list})