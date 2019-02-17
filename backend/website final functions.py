from django.shortcuts import render

# Create your views here.

from django.shortcuts import HttpResponse,render,get_object_or_404
from django.contrib.auth import login
from django .contrib.auth.models import User
from django.shortcuts import redirect
from django.views.generic import CreateView,UpdateView
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from .forms import RegistrationForm,Home,Ho,EditProfileForm
from .models import User ,Tour,TourInfo,UserProfile


from django.utils.datastructures import MultiValueDictKeyError
from django.contrib.auth.forms import UserChangeForm,PasswordChangeForm
from django.contrib.auth import update_session_auth_hash

from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.conf import settings
from django.core.mail import send_mail
from django.contrib import messages
from .token import account_activation_token
from django.core.mail import EmailMessage
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text



IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg']
def homeo (request): # homepagefor all visitors
    return render(request,"use/e.html",{})

def about (request):
    return render(request,"use/aboutus.html",{})


def home(request): # company
    if request.user.is_authenticated:
        return redirect('use:company')
    else:
        return redirect('use:customer')


def copage (request):
    return render(request,"use/company.html",{})

def tours(request):
    all = Tour.objects.all()

    return render(request, 'use/offers.html',{'all':all,})

def comptou(request):# company tours
    all = Tour.objects.filter(company=request.user)

    return render(request, 'use/allcompan.html',{'all':all,})

def des(request,pk):# company toursex
    all = Tour.objects.get(pk=pk)

    return render(request, 'use/des.html',{'all':all,})

def desc(request,pk):# company toursex
    all = Tour.objects.get(pk=pk)

    return render(request, 'use/desc.html',{'all':all,})


def filterd(request):
    if request.method == 'GET':

        dest = request.GET.get('dest')
        #min = request.GET.get('min')
       # max = request.GET.get('max')
        try:
            all = Tour.objects.filter(dest__icontains=dest)
                #start_date__gt=date1, start_date__lt=date2, dest__icontains=dest, cost__lt=max,
                                   #   cost__gt=min)
            return render(request, 'use/offers.html', {'all': all})
        except:
            return HttpResponse("this tour is n't valid")

    else:
        return render(request, "use/offers.html", {})
def filterda(request):
    if request.method == 'GET':
        date1 = request.GET.get('from')
        date2 = request.GET.get('to')

        try:
            all = Tour.objects.filter(start_date__gt=date1, end_date__lt=date2)

            return render(request, 'use/offers.html', {'all': all})
        except:
            return HttpResponse("this tour is n't valid")

    else:
        return render(request, "use/offers.html", {})


def filterb(request):
    if request.method == 'GET':
        min = request.GET.get('min')
        max = request.GET.get('max')

        try:
            all = Tour.objects.filter( cost__lt=max,
                                                 cost__gt=min)

            return render(request, 'use/offers.html', {'all': all})
        except:
            return HttpResponse("this tour is n't valid")

    else:
        return render(request, "use/offers.html", {})
















def search(request):
    if request.method == 'GET': # this will be GET now
        name =  request.GET.get('search') # do some research what it does
        try:
            status = Tour.objects.filter(name__icontains=name)
            return render( request,"use/offers.html",{"all":status} )
        except:
           return HttpResponse("this tour is n't valid")


    else:
        return render(request,"use/offers.html",{})

def profile(request): # shows register fields of the login user
    return  render(request ,'use/profile.html',{'form':request.user})

def editprofile(request):
    if request.method == 'POST':
        form =EditProfileForm (data=request.POST, instance=request.user.userprofile)
        #formm = editmodelform(request.POST, instance=request.user.userprofile)
        if form.is_valid() :
            form.save()

            return redirect('/use/profile/')
    else:
        form =EditProfileForm (instance=request.user.userprofile)

        args = {'form': form }
        return render(request, 'use/editprofile.html', args)

def changepassword(request):
    if request.method == 'POST':
        form =PasswordChangeForm (data=request.POST, user=request.user) #idont get that line

        if form.is_valid() :
            form.save()
            update_session_auth_hash(request, form.user)
            return redirect('/use/profile/')#url
        else:
            return redirect('/CM/changepassword/')

    else:
        form =PasswordChangeForm (user=request.user)
        args = {'form': form ,'formm':form}
        return render(request, 'use/changepass.html', args)



def create_tour(request):
    if not request.user.is_authenticated():
        return render(request,'use/login.html')
    else:
        form = Home(request.POST or None)
        if form.is_valid():
            tour= form.save(commit=False)
            tour.company = request.user

            tour.save()
            return render(request, 'use/allcompan.html',{'all':Tour.objects.filter(company=request.user)})
        context = {
            "form": form,
        }
        return render(request, 'use/Trav.html', context)

def edittour(request, pk):
    instance = Tour.objects.get(pk=pk)  # object

    if request.method == "POST":
        form = Home(request.POST,instance=instance)

        if form.is_valid():
            post = form.save(commit=False)
            post.company = request.user
            post.save()
            return redirect('use:des',pk=post.pk)



    else:
            return render(request, 'use/editTrav.html', {'form':Home(instance=instance)})


def delete(request, pk):
    tour = Tour.objects.get(pk=pk)
    tour.delete()
    try:
        all = Tour.objects.filter(company=request.user)  # need many so filter
        return render(request, 'use/allcompan.html', {'all': all})
    except:
        return render(request, 'use/allcompan.html', {'all': all})





def details(request, pk):
    form = Ho(request.POST or None)
    tour = get_object_or_404(Tour, pk=pk)
    if form.is_valid():

        details= form.save(commit=False)#one day
        details.tour=tour

        details.save()
        return render(request, 'use/travel-details.html', {'tour': tour})
    context = {

        'form': form
    }
    return render(request, 'use/travel-details.html', context)

    tour=Tour.objects.get(pk=pk)
    days=TourInfo.objects.filter(tour=tour)
    return render(request, 'use/d.html', {'days': days})

def show_Details(request, pk):#tour id
    tour=Tour.objects.get(pk=pk)
    days=TourInfo.objects.filter(tour=tour)
    return render(request, 'use/d.html', {'days': days ,"j":pk})



def show_Detail(request, pk):#tour id
    tour=Tour.objects.get(pk=pk)
    days=TourInfo.objects.filter(tour=tour)
    return render(request, 'use/dd.html', {'days': days})

def editdet(request,j, pk):
    instance = TourInfo.objects.get(pk=pk)  # object

    if request.method == "POST":
        form = Ho(request.POST,instance=instance)

        if form.is_valid():
            try:
                post = form.save(commit=False)
                #post.company = request.user
                post.tour=Tour.objects.get(pk=j)
                post.save()
                return redirect('use:showd',pk=j)
            except:
                redirect('use:details')





    else:
            return render(request, 'use/editDe.html', {'form':Ho(instance=instance)})



def deleted(request,j, pk):

    tourday = TourInfo.objects.get(pk=pk)
    tourday.delete()
    tour = Tour.objects.get(pk=j)
    #days = TourInfo.objects.filter(tour=tour)
    try:
          # need many so filter
        return render(request, 'use/des.html', {'all': tour})
    except:
        return render(request, 'use/des.html', {'all': tour})




def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            site = get_current_site(request)
            subject = "Confirmation message for blog"

            message = render_to_string('use/account_activation_email.html', {
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
        return render(request, 'use/select.html', args)
def accountactivationsent(request):
    return render(request, 'use/accountactivationsent.html')



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
        return redirect('/use/company')

    else:
        return HttpResponse('Activation link is invalid!')





















