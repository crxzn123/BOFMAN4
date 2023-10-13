from django.shortcuts import render

def landing_view(request):
    template = "index.html"
    contexts = {}
    return render(request, template, contexts)

def about_view(request):
    template = "about.html"
    contexts = {}
    return render(request, template, contexts)