from django.shortcuts import render
from biography.models import *

def main(request):
    member_list = Member.objects.filter(is_main=True)

    return render(request, "main.html", {"member_list": member_list})