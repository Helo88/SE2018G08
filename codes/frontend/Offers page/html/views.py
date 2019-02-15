from django import forms
from django.shortcuts import HttpResponse,render,redirect,HttpResponseRedirect, get_object_or_404,render_to_response
from django.contrib.auth import update_session_auth_hash
from django.forms import formset_factory ,BaseFormSet
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.contrib.auth.forms import UserChangeForm,PasswordChangeForm
from django .contrib.auth.models import User
from . forms import RegistrationForm,EditProfileForm,editmodelform,addtour,UserProfileInfoForm
from .models import UserProfile,Tour,TourInfo
from django import forms
from .token import account_activation_token
from django.core.mail import EmailMessage
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required
from django.views.generic import UpdateView,CreateView,DeleteView


from django.contrib import auth
from django.views.generic import TemplateView

from django.contrib.auth import authenticate, login
#def home(request):
  #  return render(request,'CM/home.html',{})

def select(request):
    return render(request,'CM/select.html',{})
def selectt(request):
    return render(request,'CM/selectt.html',{})
def home(request):
    return render(request,'CM/offers.html',{})
def hung(request):

    return render(request,'CM/e.html',{})


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
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

#def index(requset): #shows userprofiles contents

  #  return render(requset,"CM/index.html",{'name':requset.company.Tour.objects.all()})

def edit_profile(request):
    if request.method == 'POST':
        form = EditProfileForm (request.POST, instance=request.user)
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






def index(request,pk=None): # show tours of id or without
    if pk: # get return interable cauz  it returns object not list
       args={'form':request.user,'tours': Tour.objects.filter(pk=pk)} # by its number inDB
    else:
        args = {'form': request.user, 'tours': Tour.objects.filter(user=request.user)} # by user

    return  render(request ,'CM/tours.html',args)


def indx(request,pk=None): # show tours of id or without
    if pk:
       args={'form':request.user,'tours': Tour.objects.filter(pk=pk).delete()} # by its number inDB


    return render(request, 'CM/tours.html', args)


def update(request,pk=None): # show tours of id or without
    if pk:
       args={'form':request.user,'tours': Tour.objects.filter(pk=pk).update()} #

    return render(request, 'CM/tours.html', args)


#ef index(request): # shows register fields of the login user
   # args={'form':request.user,'tours': Tour.objects.filter.all()}

    #return  render(request ,'CM/tours.html',args)


def view_profile(request, pk=None):
    if pk:
        user = User.objects.get(pk=pk)
    else:
        user = request.user
    args = {'user': user}
    return render(request, 'CM/profile.html', args)




class add(CreateView):
    template_name = 'CM/addtour.html'
    form_class = addtour
    def get(self, request):
        form = addtour()
        posts = Tour.objects.all()
        users = User.objects.exclude(id=request.user.id)


        args = {
            'form': form, 'posts': posts, 'users': users}
        return render(request, self.template_name, args)

    def post(self, request):
        form = addtour(request.POST )
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()

        text = form.cleaned_data.get('post')
        form = addtour()
        return redirect('CM:index')

        args = {'form': form,'text':text}
        return render(request, self.template_name, args)




def remove(request):
    if request.method == 'POST':
        form = addtour()
        tours= Tour.objects.all()
        item_id = int(request.POST.get('item_id'))
        item = Tour.objects.get(id=item_id)
        item.delete()
        return render_to_response('CM/tours.html', {
        'form': form, 'tours': tours,
        }, request)




def edittour(request, pk):
    instance = Tour.objects.get(pk=pk) #object

    if request.method == "POST":
        form = addtour(request.POST, instance=instance)
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()
            return redirect('CM:index')
    else:
        form = addtour(instance=instance)
    return render(request, 'CM/edittour.html',{'form': form })


def delete(request, pk):
    new_to_delete = Tour.objects.get(pk=pk)
    #+some code to check if this object belongs to the logged in user

    if request.method == 'POST':
        form = addtour(request.POST, instance=new_to_delete)

        if form.is_valid(): # checks CSRF
            new_to_delete = form.delete(commit=False)
            new_to_delete.user = request.user
            new_to_delete.delete()

            return redirect('CM:index') # wherever to go after deleting

    else:
        form = addtour(instance=new_to_delete)

    template_vars = {'form': form}
    return render(request, 'CM/deletetour.html', {'form':form})


#def delete(request, pk):
     #  ob = Tour.objects.filter(pk = pk).delete()
    #   return render(request, 'CM/deletetour.html', {'delete':ob})


class company(CreateView):
    template_name = 'CM/profile.html'
    form_class = UserProfileInfoForm
    def get(self, request):
        form = addtour()
        posts = UserProfile.objects.all()
        users = User.objects.exclude(id=request.user.id)


        args = {
            'form': form, 'posts': posts, 'users': users}
        return render(request, self.template_name, args)

    def post(self, request):
        form = UserProfileInfoForm(request.POST )
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()

        text = form.cleaned_data.get('post')
        form = UserProfileInfoForm()
        return redirect('CM:index')

        args = {'form': form,'text':text}
        return render(request, self.template_name, args)



