
from django.conf.urls import url
from . import  views
from django.contrib.auth.views import login,logout
from django.contrib import admin
#from .views import HomeView
app_name="use"
urlpatterns = [
url(r'^$', views.home,name='home'),
url(r'^home$', views.homeo,name='homeo'),
url(r'^register/$', views.ho,name='ho'),
url(r'^register/customer/$', views.StudentSignUpView.as_view(),name='register'),
url(r'^register/company/$', views.TeacherSignUpView.as_view(),name='regcu'),
url(r'^aboutus$', views.about,name='about'),
url(r'^login$', login, {'template_name': 'use/login.html'},name='login'),
url(r'^accounts/profile/$', views.home,name='home'),
url(r'^tours$', views.tours, name='tours'),
url(r'^addtour/$', views.HomeView.as_view(),name='addtour'),
url(r'^edit/(?P<pk>\d+)/$', views.edittour, name='edittour'),
url(r'^companytours$', views.comptou, name='compa'),#companytours
url(r'^tourinfo$', views.tourinfo, name='tourinfo'),
url(r'^tour-details$', views.tourdetails, name='tourdetails'),
url(r'^customer$', views.userpage, name='customer'),
url(r'^company$', views.copage, name='company'),
url(r'^search$', views.search, name='search'),
url(r'^filter$', views.filter, name='filter'),
url(r'^logout$', login, {'template_name': 'use/e.html'},name='logout'),














]
