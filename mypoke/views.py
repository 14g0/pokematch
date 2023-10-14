from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "mypoke/index.html")

def quiz(request):
    return render(request, "mypoke/quiz.html")