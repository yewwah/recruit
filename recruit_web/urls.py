from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index$', views.index, name='index'),
    url(r'^forms$', views.forms, name='forms'),
    url(r'^test$', views.test, name='test'),
    url(r'^submit$', views.submit, name='submit'),
    url(r'^base$', views.base, name='base'),
]
