from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.landing_view, name='landing'),
    path('about', views.about_view, name='about'),
]
