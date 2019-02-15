from django.shortcuts import render

# Create your views here.

from django.shortcuts import HttpResponse,render
from django.contrib.auth import login
from django.shortcuts import redirect
from django.views.generic import CreateView,UpdateView
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from .forms import StudentSignUpForm,TeacherSignUpForm,Home
from .models import User ,Tour,TourInfo
from django.utils.decorators import method_decorator
from .decorators import customer_required ,company_required
from django.utils.datastructures import MultiValueDictKeyError


def homeo (request): # homepage
    return render(request,"use/e.html",{})

def ho (request):
    return render(request,"use/sel.html",{})

def about (request):
    return render(request,"use/aboutus.html",{})

def userpage (request):
    return render(request,"use/userpage.html",{})

def home(request): # diff
    if request.user.is_authenticated:
        if request.user.is_company:
            return redirect('use:company')
        else:
            return redirect('use:customer')
    return render(request, 'use/e.html')

def copage (request):
    return render(request,"use/company.html",{})









class StudentSignUpView(CreateView):
    model = User
    form_class = StudentSignUpForm
    template_name = 'use/select.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'customer'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        user.backend = 'django.contrib.auth.backends.ModelBackend'
        login(self.request, user)
        return redirect('use:home')

class TeacherSignUpView(CreateView):
    model = User
    form_class = TeacherSignUpForm
    template_name = 'use/select.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'company'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        user.backend = 'django.contrib.auth.backends.ModelBackend'
        login(self.request, user)
        return redirect('use:home')


def filter(request):
    if request.method == 'GET':
        date1 = request.GET.get('from')
        date2 = request.GET.get('to')
        dest = request.GET.get('dest')
        min = request.GET.get('min')
        max = request.GET.get('max')
        try:
            all = Tour.objects.filter(start_date__gt=date1, start_date__lt=date2, dest__icontains=dest, cost__lt=max,
                                      cost__gt=min)
            return render(request, 'use/offers.html', {'all': all})
        except:
            return HttpResponse("this tour is n't valid")

    else:
        return render(request, "use/offers.html", {})

def tours(request):
    all = Tour.objects.all()

    return render(request, 'use/offers.html',{'all':all,})

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



class HomeView(CreateView):
    template_name = 'use/Trav.html'



@method_decorator([login_required, company_required], name='dispatch')
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
    return render(request,'use/travel-details.html',{id:'id'})


class HomeView(CreateView):
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



def comptou(request):
    all = Tour.objects.filter(company=request.user)

    return render(request, 'use/allcompan.html',{'all':all,})

def tourdetails(request):
    tour_id=request.GET['tourid']
    tour=Tour.objects.get(pk=tour_id)

    return render(request,"use/des.html",{'tour':tour})



