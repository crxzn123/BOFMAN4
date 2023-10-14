from django.shortcuts import render

def landing_view(request):
    template = "index.html"
    contexts = {}
    return render(request, template, contexts)

def about_view(request):
    template = "about.html"
    contexts = {}
    return render(request, template, contexts)

def gallery_view(request):
    template = "gallery.html"
    contexts = {}
    return render(request, template, contexts)

def merch_view(request):
    template = "merch.html"
    contexts = {}
    return render(request, template, contexts)

def perform_view(request):
    template = "perform.html"
    contexts = {}
    return render(request, template, contexts)