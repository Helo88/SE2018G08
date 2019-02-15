from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_company = models.BooleanField(default=False)

class customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.user.username


class Tour(models.Model):
    company = models.ForeignKey(User, on_delete=models.CASCADE, null=True )
    name = models.CharField(max_length=50)
    dest = models.CharField(max_length=20)
    start_date = models.DateField(default='')
    end_date = models.DateField(default='')
    cost = models.IntegerField(null=True)
    customer = models.ManyToManyField(customer,default='',null=True,blank=True)
    objects = models.Manager()
    img = models.ImageField(null=True,blank=True,upload_to='tour_img')

    def __str__(self):
        return self.name


class TourInfo (models.Model):
    tour = models.ForeignKey(Tour, related_name='tourinfo', on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True, blank=True)
    text = models.TextField()
