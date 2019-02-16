from django import forms
from django.shortcuts import HttpResponse,render,redirect
from django.contrib.auth.forms import UserChangeForm,PasswordChangeForm
from django .contrib.auth.models import User
from .forms import RegistrationForm,EditProfileForm,editmodelform
from .models import UserProfile
from django.contrib.auth import update_session_auth_hash
from django.forms import formset_factory ,BaseFormSet
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.conf import settings
from django.core.mail import send_mail
from django.contrib import messages
from .token import account_activation_token
from django.core.mail import EmailMessage
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text
from django.contrib.auth import views as auth_views
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required




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
            ail_subject = 'Activate your blog account.'
            to_email = form.cleaned_data.get('email')
            email = EmailMessage(subject, message, to=[to_email])
            email.send()
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
        login(request, user)
        return redirect('/CM/profile')

    else:
        return HttpResponse('Activation link is invalid!')

send_mail('Subject here', 'Here is the message.', settings.EMAIL_HOST_USER,
         ['to@example.com'], fail_silently=False)





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


















class addtour(CreateView):
    template_name = 'use/Trav.html'

    def get(self, request):
        form = Home
        posts = Tour.objects.all()
        users = User.objects.exclude(id=request.user.id)

        args = {
            'form': form, 'posts': posts, 'users': users
        }
        return render(request, self.template_name, args)

    def post(self, request):
        form = Home(request.POST)
        if form.is_valid() and request.user .is_company:
            post = form.save(commit=False)
            post.user = request.user
            post.save()

            text = form.cleaned_data.get('post')
            form = Home()
            return redirect('use:tours')

        args = {'form': form, 'text':form.cleaned_data.get('post') }
        return render(request, self.template_name, args)


def edittour(request, pk):
    instance = Tour.objects.get(pk=pk)  # object
    form = Home( instance=instance)
    if request.method == "POST":

        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()
            return redirect('use:tours', pk=post.pk)

        else:
            return render(request, 'use/editTrav.html', {'form': form})














