from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from.models import UserProfile,Tour,TourInfo,profile
from django.forms import ModelForm

class RegistrationForm(UserCreationForm): # contains username ,password and confirmation

    email = forms.EmailField(required=True ) # the extra field
    #phone = forms.IntegerField(required=True)
    class Meta: # what the fields are
        model = User
        fields = (
            'username',
            'first_name',
            'email',
            'password1',
            'password2',
        )

    

    def save(self): # i think it cheacks if every field is ok
        user = super(RegistrationForm, self).save(commit=False)
        user.is_company = True
        user.first_name = self.cleaned_data['first_name']
        user.email = self.cleaned_data['email']
        user.save()


        return user


















class customerSignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = (
            'username',
            'password1',
            'password2',
        )


    def save(self):
        user = super(customerSignUpForm, self).save(commit=False)
        user.is_customer = True
        user.save()


        return user

class EditProfileForm(UserChangeForm): # inhertence of editing form



    class Meta:
        model = User
        fields = (
            'email',
            'first_name',

            'password'
        )

class editmodelform(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = (
            'description',
            'first_name',
            'website',
            'city',
            'phone'
        )


class addtour(forms.ModelForm):
    class Meta:
        model =Tour
        fields = (
            'name',
            'dest',
           'start_date',
            'end_date',
            'cost',

        )

    def __init__(self, *args, **kwargs):
        super(addtour, self).__init__(*args, **kwargs)
        for field in self.fields.values():
            field.error_messages = {'required': '*'}


class DeleteNewForm(forms.ModelForm):
    class Meta:
        model = Tour
        fields = []

class UserProfileInfoForm(forms.ModelForm):
    class Meta():
        model = UserProfile
        fields = ('description','first_name','website','phone',)

