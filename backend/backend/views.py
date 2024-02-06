from django.shortcuts import render
from biography.models import *
from disks.models import *

def main(request):
    member_list = Member.objects.filter(is_main=True)
    albums_list = list(Disk.objects.all().values())
    albums = {"list": [albums_list[i:i+3] for i in range(0, len(albums_list), 3)]}
    albums["length"] = len(albums["list"])
    print(albums)

    return render(request, "main.html", {"member_list": member_list, "albums": albums})