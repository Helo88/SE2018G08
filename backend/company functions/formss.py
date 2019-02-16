from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from.models import UserProfile
from django.forms import ModelForm

class RegistrationForm(UserCreationForm): # contains username ,password and confirmation
    email = forms.EmailField(required=True) # the extra field

    class Meta: # what the fields are
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'email',
            'password1',
            'password2'
        )


    def save(self, commit=True): # i think it cheacks if every field is ok
        user = super(RegistrationForm, self).save(commit=False)
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.email = self.cleaned_data['email']

        if commit: #them it 'd save it
            user.save()

        return user


class EditProfileForm(UserChangeForm): # inhertence of editing form



    class Meta:
        model = User
        fields = (
            'email',
            'first_name',
            'last_name',
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




