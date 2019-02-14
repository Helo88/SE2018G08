
from django.db import models
from django.forms import ModelForm
from django.contrib.auth.models import User
from django.db.models.signals import post_save

class UserProfile(models.Model):
        user = models.OneToOneField(User, on_delete=models.CASCADE) # here i make a profile to every user (refer to user using USER)
        description = models.CharField(max_length=100, default='')
        first_name=models.CharField(max_length=10 ,default=User)
        city = models.CharField(max_length=100, default='')
        website = models.URLField(default='')
        phone = models.IntegerField(default=0)
      #  image = models.ImageField(upload_to='profile_image', blank=True)
        def __str__(self):
            return self.user.username
def create_profile(sender, **kwargs): # function is here it make somthing at the admin not seen by user
    if kwargs['created']:
        user_profile = UserProfile.objects.create(user=kwargs['instance'])

post_save.connect(create_profile, sender=User)


class Customer(models.Model):
    name = models.CharField(max_length=20)
    objects = models.Manager()

    def __str__(self):
        return self.name


class Tour(models.Model):
    company = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=50)
    dest = models.CharField(max_length=20)
    start_date = models.DateField(default='')
    end_date = models.DateField(default='')
    cost = models.IntegerField(null=True)
    customer = models.ManyToManyField(Customer,default='',null=True,blank=True)
    objects = models.Manager()
    img = models.ImageField(null=True,blank=True,upload_to='tour_img')

    def __str__(self):
        return self.name


class TourInfo (models.Model):
    tour = models.ForeignKey(Tour, related_name='tourinfo', on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True, blank=True)
    text = models.TextField()


