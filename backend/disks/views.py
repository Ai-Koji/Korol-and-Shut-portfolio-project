from django.shortcuts import render
from django.shortcuts import render, HttpResponse
# ДИСКОГРАФИЯ

def main(request):
    return render(request, "discography.html", {})

