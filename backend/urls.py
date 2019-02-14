from django.conf.urls import url,include
#from django.contrib.auth import views
#from django.contrib.auth.views import login, logout


from . import views
#from .views import add
app_name='CM'
urlpatterns = [
##url(r'^password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
   ## auth_views.PasswordResetConfirmView.as_view(),
    #name='password_reset_confirm'),





url(r'^$', views.home, name ='home'),
url(r'^profile/$', views.profile, name='profile'),
url(r'^profile/$', views.hung, name='hung'),
url(r'^accounts/profile/$',views.profile, name='profile'),
url(r'^profile/edit/$', views.edit_profile, name='profilee'),
url(r'^changepassword/$', views.changepassword, name='password'),
#url(r'^index/$', views.index, name='index'),
url(r'^select/$', views.select, name='select'),
url(r'^selectt/$', views.selectt, name='selectt'),
url(r'^register/$', views.register, name='register'),


url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
       views.activate, name='activate'),

url(r'^account_activation_sent/$', views.accountactivationsent, name='accountactivationsent'),
url(r'^select/CM/login.html/$',views.log, name='login'),
url(r'^selectt/CM/regform.html/$', views.register, name='register'),
url(r'^login/$', views.log, name='login' ),
#url(r'^add/$', views.add.as_view(), name='addtour' ),
url(r'^logout/$', views.logout, name='logout'),

##url(r'^passreset/$',auth_views.PasswordResetView.as_view() ,name='password_reset'),
#url(r'^password_reset/done/$', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
#url('^password_reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$'  ,auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
#url(r'^reset/done/$', auth_views.PasswordResetCompleteView, name='password_reset_complete'),




url(r'^tours$', views.tours, name='tours'),
url(r'^search$', views.search, name='search'),
url(r'^filter$', views.filter, name='filter'),
url(r'^addtour$', views.addtour, name='addtour'),
url(r'^tourinfo$', views.tourinfo, name='tourinfo'),
url(r'^company$', views.company, name='company'),






]


