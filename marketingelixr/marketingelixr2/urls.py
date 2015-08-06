from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

from marketingelixr2 import views

urlpatterns = [
    url(r'^$', views.andrew, name=''),
]
