
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
        image = models.ImageField(upload_to='profile_image', blank=True)
        def __str__(self):
            return self.user.username









def create_profile(sender, **kwargs): # function is here it make somthing at the admin not seen by user
    if kwargs['created']:
        user_profile = UserProfile.objects.create(user=kwargs['instance'])

post_save.connect(create_profile, sender=User)
