from django import forms
from django.shortcuts import HttpResponse,render,redirect,HttpResponseRedirect
from django.contrib.auth import update_session_auth_hash
from django.forms import formset_factory ,BaseFormSet
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.contrib.auth.forms import UserChangeForm,PasswordChangeForm
from django .contrib.auth.models import User
from . forms import RegistrationForm,EditProfileForm,editmodelform
from .models import UserProfile
from django import forms
from .token import account_activation_token
from django.core.mail import EmailMessage
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required
from django.contrib import auth
from django.contrib.auth import authenticate, login

from .models import Tour, TourInfo, Customer, User
from datetime import datetime

#def home(request):
  #  return render(request,'CM/home.html',{})

def select(request):
    return render(request,'CM/select.html',{})
def selectt(request):
    return render(request,'CM/selectt.html',{})
def home(reuest):
    return HttpResponse("hallo")
def hung(request):

    return render(request,'CM/hung.html',{})

class BaseArticleFormSet(BaseFormSet):
         def add_fields(self, form, index):
              super().add_fields(form, index)
              form.fields["my_field"] = forms.CharField()


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            site = get_current_site(request)
            subject = "Confirmation message for blog"

            message = render_to_string('CM/account_activation_email.html', {
            'user': user,
            'domain': site.domain,
            'uid': urlsafe_base64_encode(force_bytes(user.pk)).decode(),
            'token': account_activation_token.make_token(user),
            })
            all_subject = 'Activate your blog account.'
            from_email = settings.EMAIL_HOST_USER
            to_list=[user.email,settings.EMAIL_HOST_USER]
            send_mail(subject,message,from_email,to_list,fail_silently=True)

            return HttpResponse('Please confirm your email address to complete the registration')


        else:
             return HttpResponse('invalid form')









    else:
        form = RegistrationForm()

        args = {'form': form}
        return render(request, 'CM/regform.html', args)


def profile(request): # shows register fields of the login user
    return  render(request ,'CM/profile.html',{'form':request.user})

def index(requset): #shows userprofiles contents

    return render(requset,"CM/index.html",{'name':UserProfile.objects.all()})

def edit_profile(request):
    if request.method == 'POST':
        form =EditProfileForm (request.POST, instance=request.user)
        formm = editmodelform(request.POST, instance=request.user.userprofile)
        if form.is_valid() and formm.is_valid():
            form.save()
            formm.save()
            return redirect('/CM/profile/')
    else:
        form =EditProfileForm (instance=request.user)
        formm=editmodelform (instance=request.user.userprofile)
        args = {'form': form ,'formm':formm}
        return render(request, 'CM/editprofile.html', args)


def changepassword(request):
    if request.method == 'POST':
        form =PasswordChangeForm (data=request.POST, user=request.user) #idont get that line

        if form.is_valid() :
            form.save()
            update_session_auth_hash(request, form.user)
            return redirect('/CM/profile/')#url
        else:
            return redirect('/CM/changepassword/')

    else:
        form =PasswordChangeForm (user=request.user)
        args = {'form': form ,'formm':form}
        return render(request, 'CM/changepass.html', args)



def accountactivationsent(request):
    return render(request, 'CM/accountactivationsent.html')



def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        user.backend = 'django.contrib.auth.backends.ModelBackend'
        login(request, user)

        return redirect('/CM/profile')

    else:
        return HttpResponse('Activation link is invalid!')

#send_mail('Subject here', 'Here is the message.', settings.EMAIL_HOST_USER,
      #   ['to@example.com'], fail_silently=False)



def log(request):

    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user =auth.authenticate(username=username, password=password)

        if user is not None:
                auth.login(request, user)

                return HttpResponseRedirect('/CM/profile')
           # else:
               # return HttpResponseRedirect('shit')
    return render(request, "CM/login.html")


def logout(request):
    auth.logout(request)
    return render(request, 'CM/logout.html')


def tours(request):
    all = Tour.objects.all()

    return render(request, 'CM/offers page/html/offers.html',{'all':all,})

def search(request):
    keyword = request.POST['search']
    all = Tour.objects.filter(name__contains=keyword)

    return render(request,'CM/offers page/html/offers.html',{'all': all, })


def filter(request):
    date1 = request.POST['from']
    date2 = request.POST['to']
    dest = request.POST['dest']
    min = request.POST['min']
    max = request.POST['max']
    all = Tour.objects.filter(start_date__gt=date1,start_date__lt=date2,dest__contains=dest,cost__lt=max,cost__gt=min)
    return render(request, 'CM/offers page/html/offers.html', {'all': all, })



def addtour(request):
    name = request.POST['name']
    dest = request.POST['dest']
    sd = request.POST['start-date']
    ed = request.POST['end-date']
    cost = request.POST['cost']
    a=Tour(name=name,dest=dest,start_date=sd,end_date=ed,cost=cost,company_id=request.user.id)
    a.save()
    id = a.id
    return render(request,'CM/company-page/travel-details.html',{'id': id})



def tourinfo(request):
    date = request.POST['date']
    time = request.POST['time']
    place = request.POST['place']
    id = request.POST['id']

    t=Tour.objects.filter(id=id)
    ti=TourInfo()
    ti.tour=t[0]
    ti.time = '' + date + '' + time
    ti.text=place
    ti.save()
    return render(request,'CM/company-page/travel-details.html',{id:'id'})



def company(request):
    return render(request,'CM/company-page/company-1.html')

