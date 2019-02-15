from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction

from .models import customer, User,Tour,TourInfo

class StudentSignUpForm(UserCreationForm):


    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_student = True
        user.save()
        student = customer.objects.create(user=user)

        return user





class TeacherSignUpForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_company = True
        if commit:
            user.save()
        return user

class Home(forms.ModelForm):
    class Meta:
        model = Tour
        fields = (
            'name',
            'dest',
            'start_date',
            'end_date',
            'cost'

        )

