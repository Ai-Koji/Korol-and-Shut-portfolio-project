from django.shortcuts import render
from django.shortcuts import render
from .models import *
from biography.models import *

# ДИСКОГРАФИЯ
def main(request):
    main_disks = list(Disk.objects.all().values())
    cover_disks = list(Cover.objects.all().values())
    member_list = Member.objects.filter(is_main=True)
    members = [] 

    return render(request, "discography.html", {"member_list": member_list, "main_disks": main_disks, "cover_disks": cover_disks, "members": members})

def disk(request, name):
    main_disks = list(Disk.objects.all().values())
    member_list = Member.objects.filter(is_main=True)
    disk = Disk.objects.get(name = name)
    if not disk:
        disk = Cover.objects.get(name = name)

    return render(request, "disk.html", {"member_list": member_list, "disk": disk, "other_disks": main_disks})

