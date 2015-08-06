from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^andrew/', TemplateView(template_name='andrew.html'),name=''),
]
