from django.shortcuts import render
from .models import *

def main(request):
    member_list = Member.objects.filter(is_main=True)
    return render(request, "all-members.html", {"members": member_list})

def member(request, name):
    member_list = Member.objects.filter(is_main=True)
    member = Member.objects.get(name = name)
    return render(request, "biography.html", {"member": member, "member_list": member_list})