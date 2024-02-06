from django.shortcuts import render
from biography.models import *
from disks.models import *

def main(request):
    member_list = Member.objects.filter(is_main=True)
    disks_list = Disk.objects.all()

    return render(request, "main.html", {"member_list": member_list, "disks_list": disks_list})